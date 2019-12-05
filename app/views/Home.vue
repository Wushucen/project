<template>
  <div class="home">
    <div class="nav">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="logo">
              <img src="images/金盾.jpg" />
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="right">
              <div class="userName">userName</div>
              <el-button plain>退出</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="abstract">
      <div class="menu">
        <el-menu 
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#4F52BA"
        text-color="#fff"
        active-text-color="#42b983"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span slot="title">系统首页</span>
            </template>
            <el-menu-item-group>
              <div class="system">
                <el-menu-item index="2-1">系统首页</el-menu-item>
              </div>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-help"></i>
              <span slot="title">漏洞扫描</span>
            </template>
            <el-menu-item index="2-1">
              <router-link to="/Vulnerabilitylist">扫描列表</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-coin"></i>
              <span slot="title">资产管理</span>
            </template>
            <el-menu-item index="2-1">
              <router-link to="/zichan">资产列表</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-warning-outline"></i>
              <span slot="title">风险管理</span>
            </template>
            <el-menu-item index="2-1">
              <router-link to="/webStrategie">WEB漏洞</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/hostStrategie">主机漏洞</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span slot="title">报表管理</span>
            </template>
            <el-menu-item index="2-1">
              <router-link to="/reportlist">报表列表</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">用户设置</span>
            </template>
            <el-menu-item index="2-1">
              <router-link to="/user">用户信息</router-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item>
            <i v-show="isCollapse == false" @click="qiehuan" class="el-icon-s-fold"></i>
            <i v-show="isCollapse" @click="qiehuan" class="el-icon-s-unfold"></i>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    qiehuan() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(255, 0, 0, 0.5);// !important
  .nav {
    width: 100%;
    height: 6.5%;
    font-size: 18px;
    background: #6164c1;
    color: #fff;
    .el-row {
      margin-bottom: 20px;
      background: #6164c1;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple {
      padding: 0 30px;
      height: 40px;
      // background: rgba(234, 234, 234, .5);
    }
    .grid-content {
      border-radius: 4px;
      min-height: 40px;
    }
    .logo {
      width: 100px;
      height: 40px;
      margin-top:5px;
      img {
        width: 100px;
        height: 30px;
      }
    }
    .right {
      margin-top: 5px;
      text-align: right;
      padding-right: 30px;
      height: 36px;
      line-height: 36px;
      .el-button {
        width: 35px;
        height: 20px;
        padding: 1px;
        box-sizing: border-box;
        flex-direction: row-reverse;
        font-weight: bold;
        display: inline-block;
      }
      .userName {
        text-align: center;
        font-weight: bold;
        color: #fff;
        flex-direction: row-reverse;
        display: inline-block;
      }
    }
  }
  .abstract {
    width: 100%;
    height:100%;
    display: flex;
    .menu {
      height: 100%;
      background: #4f52ba;
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}
.el-menu-item-group__title {
  padding: 0px 0px 0px 0px !important;
  line-height: normal;
  font-size: 12px;
  color: #909399;
}
</style>