<template>
  <div class="login">
    <el-card class="box-card" shadow="hover">
      <h2>登录</h2>
      <el-input placeholder="用户名" v-model="waf_username">
        <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
      </el-input>
      <el-input placeholder="密码" v-model.trim="loginFrom"  @keyup.native="loginKeyDown" show-password>
        <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
      </el-input>
      <div style="height:10px"><el-tag  v-show="bigChar" style="margin-left:0px">大写锁定已打开</el-tag></div>
      <el-button type="primary" >登录</el-button>
  </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        waf_username: "",
        loginFrom: "",
        bigChar:false,
      }
    },
    methods:{
      loginKeyDown(event){
        const _that=this;
        //是否输入过字母键，且判断是否按键为caps lock
        if(_that.firstTochar){
            if(event.keyCode===20){
                _that.bigChar=!_that.bigChar;
                return;
            }
        }
        //未输入过字母键，或按键不是caps lock，判断每次最后输入的字符的大小写
        var e = event||window.event;
        var keyvalue = e.keyCode ? e.keyCode : e.which;
        var shifKey = e.shiftKey ? e.shiftKey:((keyvalue == 16) ? true : false);
        if(typeof(_that.loginFrom)==='undefined'){
            return;
        }
        var strlen = _that.loginFrom.length;
        var password=_that.loginFrom;

        if(strlen){
            var uniCode =password.charCodeAt(strlen-1);
            if(keyvalue>=65 && keyvalue<=90){     
                //如果是字母键   
                _that.firstTochar=true;
                if(((uniCode >= 65 && uniCode <= 90) && !shifKey)||((uniCode >= 97 && uniCode <= 122) && shifKey)){
                    _that.bigChar=true;
                }else{
                    _that.bigChar=false;
                }
            }
        }
        console.log(event.keyCode);
      },  
    }
  }
</script>

<style lang="less" scoped>
.login {
  box-sizing: border-box;
  padding: 50px;
  background: #f9f9f9;
  display: flex;
  width: 100%;
  
  .box-card {
    width: 480px;
    z-index: 99;
    .el-input{
      margin-top: 25px;

    }
    .el-button{
      margin-top: 25px;
      width: 100%;
    }
  }
  .box-card[data-v-2603423f] {
    margin: 20px auto !important;
  }
}
</style>