<template>
  <div id="container">
    <div id="searchAndCom">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <h3 style="color:#409EFF">Search</h3>
        </div>
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Adjuvant Name">
            <el-select
              v-model="form.name"
              filterable
              remote
              placeholder="please enter gene symbol"
              :remote-method="remoteMethod"
              :loading="loading"
            >
              <!-- remote-method封装好的钩子函数。当用户在输入框中输入内容的时候，会触发这个函数的执行，
              把输入框对应的值作为参数带给回调函数，loading的意思就是远程搜索的时候等待的时间，即：加载中-->
              <el-option
                v-for="option in options"
                :label="option"
                :value="option"
                :key="option">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Category">
            <el-select v-model="form.category" placeholder="请选择活动区域" @change="getNames">
              <el-option label="All" value="all"></el-option>
              <el-option label="Vaccine" value="vaccine adjuvant"></el-option>
              <el-option label="Novel" value="novel adjuvant"></el-option>
              <el-option label="Immune" value="immune agonist"></el-option>
              <el-option label="Cytokines" value="cytokines"></el-option>
              <el-option label="Genetic" value="genetic adjuvant"></el-option>
              <el-option label="Liposomal or emulsions" value="liposomal or emulsions"></el-option>
              <el-option label="Chemokines" value="chemokines"></el-option>
              <el-option label="Saponin" value="saponin"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="Search">Search</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <el-dialog
        title="Result"
        :visible.sync="resShow"
        width="50%">
      <span slot="footer" class="dialog-footer">
      <Result :zj="zj"></Result>
        <el-button type="primary" @click="vis = false" style="margin-top: 10px">OK</el-button>
      </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import Result from "./zuoji/Result";
  export default {
    name: "Search",
    components: {
      Result
    },
    data() {
      return {
        // 模糊搜索7
        zjs: [],
        options: [],
        form: {
          name: '',
          category: 'all',
        },
        // 搜索部分
        resShow: false,
        loading: false,
        // 搜索数据展示
        zj: {},
      }
    },
    methods: {
      Search() {
        this.$http.get(this.api.rdkURL + "/zuoji/" + this.form.name).then(res => {
          this.zj = res.data;
          this.resShow = true;
        });
      },
      remoteMethod(query) {
        // 如果用户输入内容了，就发请求拿数据，远程搜索模糊查询
        if (query !== "") {
          this.loading = true; // 开始拿数据喽
          this.options = this.zjs.filter((item) => {
            // 大于-1说明只要有就行，不论是不是开头也好，中间也好，或者结尾也好
            return item.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
          this.loading = false // 拿到数据喽
        } else {
          this.options = [];
        }
      },
      getNames() {
        this.$http.get(this.api.rdkURL + '/zuoji/names/' + this.form.category).then(res=>{
          this.zjs = res.data;
        });
      },
    },
    mounted() {
      this.getNames();
    }
  }
</script>

<style scoped>

  #searchAndCom {
    margin-top: 100px;
    border-radius: 4px;
  }

  /*卡片 */
  .text {
    font-size: 20px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 600px;
    height: 550px;
    margin: auto;
  }
</style>
