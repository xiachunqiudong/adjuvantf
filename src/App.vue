<template>
  <div>
    <el-image
      style="height: 100px"
      :src="logo"
    ></el-image>
    <div id="app">
      <!--导航菜单-->
      <el-menu :default-active="activeIndex"
               mode="horizontal"
               @select="handleSelect"
               class="el-menu-demo"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
               id="elMenu">
        <el-menu-item index="/" style="margin-left:500px"><i class="el-icon-s-home"></i>Home</el-menu-item>
        <el-menu-item index="/browser"><i class="el-icon-s-promotion"></i>Browser</el-menu-item>
        <el-menu-item index="/search"><i class="el-icon-search"></i>Search</el-menu-item>
        <el-menu-item index="/ana"><i class="el-icon-s-marketing"></i>Analysis</el-menu-item>
        <el-menu-item index="/contact"><i class="el-icon-phone"></i>Contact us</el-menu-item>
      </el-menu>
      <el-container>
        <el-main id="mainContent" style="margin-top: 50px;padding:0;">
          <router-view/>
        </el-main>
      </el-container>
      <!--footer-->
      <div id="footer">
        <br>
        <p style="color:#ffd04b">Copyright © Guo Lab, School of Geographic and Biologic Information, Nanjing University
          of Posts and Telecommunications, Nanjing, China.</p>
        <p style="color:#ffd04b">Liang Lab, College of Life Science, Nanjing Normal University, Nanjing, China</p>
        <p style="color:#ffd04b">© All right Reversed. ICP9036104</p>
      </div>
    </div>
  </div>
</template>

<script>
  import logo_ from './assets/logo.png'
export default {
  name: 'App',
  data() {
    return {
      activeIndex: this.$router.path,
      logo: logo_,
    };
  },
  methods: {
    // 导航菜单跳转
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key)
    }
  }
}
</script>

<style>

  #mainContent {
    max-width: 1400px;
    min-width: 600px;
    margin: auto;
  }

  body {
    padding: 0px;
    margin: 0px;
  }

  .main-color{
    background-color: #3a8ee6;
  }

  #footer {
    height: 140px;
    width: 100%;
    margin-top: 150px;
    background-color: #545c64;
    text-align: center;
  }

</style>
