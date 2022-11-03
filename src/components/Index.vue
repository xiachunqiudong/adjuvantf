<template>
  <div>
    <el-card style="margin-top: 80px; border-color: #d3dce6; border-width: 2px;">
      <span style="font-size: 35px">寻找您感兴趣的免疫佐剂</span>
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <span style="font-size: 25px">genetic adjuvant</span>
          </template>
          <p class="main-font">
            The gene adjuvant is cloning certain cytokines or immune-related genes onto eukaryotic expression vectors, and then introduces purified recombinant eukaryotic expression plasmids into animals in different pathways, directly or indirectly enhancing the immune response of T and B cells and the antibody level of vaccines through the absorption and distribution of recombinant plasmids in inoculated animals and the expression and secretion of target genes. At present, gene adjuvants are often used with nucleic acid vaccines to improve immune effects, and the two are similar in terms of preparation process, both use genetic engineering technology to construct recombinant expression plasmids, but nucleic acid vaccines integrate foreign genes encoding a certain antigen protein into the vector and introduce them into animals to induce the host to produce a specific immune response against the antigen protein to achieve the purpose of preventing and treating diseases.
          </p>
          <el-button type="primary" round @click="down('genetic.xlsx')">Download</el-button>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <span style="font-size: 25px">novel adjuvant</span>
          </template>
          <p class="main-font">
            Novel immune adjuvants should be able to induce the body to enhance the intensity of cellular or humoral immunity to meet protection requirements; Minimal side effects to humans, and long-lasting and stable immune effects. At the same time, when selecting immune adjuvants, it is necessary to give fully play to the characteristics of immune adjuvants and comprehensively consider the best balance with their toxic effects. At present, the main categories of new immune adjuvants that have been developed are: nano-chitosan, nano-calcium phosphate, polysaccharide adjuvants, CPG oligonucleotide and immunostimulant complex.
          </p>
          <el-button type="primary" round @click="down('novel.xlsx')">Download</el-button>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <span style="font-size: 25px">vaccine adjuvant</span>
          </template>
          <p class="main-font">
            The vaccine adjuvant is an ingredient used in some vaccines that helps create a stronger immune response in people receiving the vaccine. In other words, adjuvants help vaccines work better. Some vaccines that are made from weakened or killed germs contain naturally occurring adjuvants and help the body produce a strong protective immune response. However, most vaccines developed today include just small components of germs, such as their proteins, rather than the entire virus or bacteria. They strongly help the body to produce an immune response to protect the person from the disease he or she is being vaccinated against. Adjuvanted vaccines can cause more local reactions (such as redness, swelling, and pain at the injection site) and more systemic reactions (such as fever, chills and body aches) than non-adjuvanted vaccines.
          </p>
          <el-button type="primary" round @click="down('vaccine.xlsx')">Download</el-button>
        </el-collapse-item>
      </el-collapse>
    </el-card>

    <el-card style="margin-top: 40px; border-color: #333745; border-width: 2px; background-color: #333745">
      <el-row>
        <el-col :span="12">
          <div style="margin: 20px">
            <span class="title-font">遗传佐剂相关分析</span>
            <p class="main-font">
              The vaccine adjuvant is an ingredient used in some vaccines that helps create a stronger immune response in people receiving the vaccine. In other words, adjuvants help vaccines work better. Some vaccines that are made from weakened or killed germs contain naturally occurring adjuvants and help the body produce a strong protective immune response. However, most vaccines developed today include just small components of germs, such as their proteins, rather than the entire virus or bacteria. They strongly help the body to produce an immune response to protect the person from the disease he or she is being vaccinated against. Adjuvanted vaccines can cause more local reactions (such as redness, swelling, and pain at the injection site) and more systemic reactions (such as fever, chills and body aches) than non-adjuvanted vaccines.
            </p>
          </div>
        </el-col>
        <el-col :span="12">
          <el-image
            style="height: 350px;"
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-top: 40px; border-color: #d3dce6; border-width: 2px;">
      <el-row>
        <el-col :span="12">
          <el-image
            style="height: 350px"
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
          </el-image>
        </el-col>
        <el-col :span="12">
          <div style="margin: 20px">
            <span class="title-font">遗传佐剂相关分析</span>
            <p class="main-font">
              The vaccine adjuvant is an ingredient used in some vaccines that helps create a stronger immune response in people receiving the vaccine. In other words, adjuvants help vaccines work better. Some vaccines that are made from weakened or killed germs contain naturally occurring adjuvants and help the body produce a strong protective immune response. However, most vaccines developed today include just small components of germs, such as their proteins, rather than the entire virus or bacteria. They strongly help the body to produce an immune response to protect the person from the disease he or she is being vaccinated against. Adjuvanted vaccines can cause more local reactions (such as redness, swelling, and pain at the injection site) and more systemic reactions (such as fever, chills and body aches) than non-adjuvanted vaccines.
            </p>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-top: 40px; border-color: #333745; border-width: 2px; background-color: #333745">
      <el-row>
        <el-col :span="12">
          <div style="margin: 20px">
            <span class="title-font">遗传佐剂相关分析</span>
            <p class="main-font">
              The vaccine adjuvant is an ingredient used in some vaccines that helps create a stronger immune response in people receiving the vaccine. In other words, adjuvants help vaccines work better. Some vaccines that are made from weakened or killed germs contain naturally occurring adjuvants and help the body produce a strong protective immune response. However, most vaccines developed today include just small components of germs, such as their proteins, rather than the entire virus or bacteria. They strongly help the body to produce an immune response to protect the person from the disease he or she is being vaccinated against. Adjuvanted vaccines can cause more local reactions (such as redness, swelling, and pain at the injection site) and more systemic reactions (such as fever, chills and body aches) than non-adjuvanted vaccines.
            </p>
          </div>
        </el-col>
        <el-col :span="12">
          <el-image
            style="height: 350px"
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
          </el-image>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    down(filename) {
      let href = this.api.rdkURL + "/down/" + filename;
      let a = document.createElement('a');
      a.href = href;
      a.click();
    },
  }
}
</script>

<style scoped>

  .main-font {
    color: #3a8ee6;
    font-size: 15px;
    text-indent: 40px;
    line-height: 1.4;
  }
  .title-font {
    color: #3a8ee6;
    font-size: 25px;
  }
</style>
