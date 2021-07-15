export default {
  install(Vue) {
    Vue.prototype.$routerIntercept=function (name,_this) {
      if(name.data.error_response){
        if(name.data.error_response.code=="common.auth-token-error"){
          this.$message({
            showClose: true,
            message: '指令已过期',
            type: 'error'
          });
          setTimeout(function () {
            sessionStorage.clear();
            _this.$router.push('./login');
          },1000)
          return false;
        }else{
          this.$message({
            showClose: true,
            message:name.data.error_response.msg,
            type: 'error'
          });
          return false;
        }
      }
    }
  }
}
