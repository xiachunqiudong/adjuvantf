<template>
  <div>
    <div>
      <el-descriptions title="Details" :column="1" border direction="vertical">
        <el-descriptions-item label="Name">
          {{zj.name}}
        </el-descriptions-item>
        <el-descriptions-item label="GeneSymbol">
          {{zj.geneSymbol}}
        </el-descriptions-item>
        <el-descriptions-item label="Dategory">
          {{zj.category}}
        </el-descriptions-item>
        <el-descriptions-item label="Disease">
          {{zj.disease}}
        </el-descriptions-item>
        <el-descriptions-item label="Annotation">
          {{zj.annotation}}
        </el-descriptions-item>
        <el-descriptions-item label="Source">
          {{zj.source}}
        </el-descriptions-item>
        <el-descriptions-item label="PublicDate">
          {{zj.publicDate}}
        </el-descriptions-item>
        <el-descriptions-item label="MoreCertification">
          {{zj.moreCertification}}
        </el-descriptions-item>
        <!--pmid-->
        <el-descriptions-item label="PMID">
          <el-link type="primary" :underline="false" :href="'https://pubmed.ncbi.nlm.nih.gov/' + zj.pmid ">{{zj.pmid}}</el-link>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Result",
      props: {
        zj: {},
      },
    }
</script>

<style scoped>

</style>
