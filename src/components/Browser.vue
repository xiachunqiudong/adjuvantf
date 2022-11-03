<template>
  <div>
    <el-card class="box-card" style="margin-top: 80px">
      <el-table
        :stripe="true"
        :border="true"
        :data="tableData"
        style="width: 100%;">
        <el-table-column
          fixed
          prop="name"
          label="Name"
          width="250">
        </el-table-column>
        <el-table-column
          prop="geneSymbol"
          label="geneSymbol"
          width="250">
        </el-table-column>
        <el-table-column
          prop="category"
          label="Category"
          width="250">
        </el-table-column>
        <el-table-column
          prop="disease"
          label="Disease"
          width="250">
        </el-table-column>
        <el-table-column
          prop="publicDate"
          label="publicDate"
          width="100">
        </el-table-column>
        <el-table-column
          prop="pmid"
          label="pmid"
          width="150">
        </el-table-column>
        <el-table-column label="Option">
          <template slot-scope="scope">
            <el-button
              size="small"
              type="primary"
              @click="getMore(scope.$index, scope.row)">more
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="findPage"
        :total="total"
        :current-page="pageNow"
        style="margin-top: 20px">
      </el-pagination>
    </el-card>
    <el-dialog
      title="Result"
      :visible.sync="vis"
      width="50%">
      <span slot="footer" class="dialog-footer">
      <Result :zj="zj"></Result>
        <el-button type="primary" @click="vis = false" style="margin-top: 10px">OK</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import Result from "./zuoji/Result";
  export default {
    name: "Browser",
    components: {
      Result
    },
    data() {
      return {
        tableData: [],
        total: 0,
        pageNow: 1,
        vis: false,
        zj: {},
      }
    },
    methods: {
      findPage(page) {
        this.pageNow = page;
        this.getAllZuoJi();
      },
      getAllZuoJi() {
        this.$http.get(this.api.rdkURL + '/zuoji/all/' + this.pageNow).then(res => {
            this.tableData = res.data.data;
            this.total = res.data.counts;
          }
        )
      },
      getMore(index, row) {
        this.$http.get(this.api.rdkURL + '/zuoji/' + row.name).then(res => {
            this.zj = res.data;
            this.vis = true;
          }
        )
      },
    },
    created() {
      this.getAllZuoJi();
    }
  }
</script>

<style scoped>

</style>



