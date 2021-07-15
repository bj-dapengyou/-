<template>
  <div id="about">
    工作台
  </div>
</template>

<script>

export default {
  name: "about",
};
</script>
<style scoped lang="less">
#about {
  height: 100% !important;
  width: 100% !important;
  .dabox {
    display: flex;
    height: 100% !important;
    el-aside {
      width: 300px;
      height: 100% !important;
      border-right: 1px solid #D0D0D0;
      .as_yun{
          height: 56px;
          line-height: 56px;
        //   border-top: 1px solid #D0D0D0;
          border-bottom: 1px solid #D0D0D0;
          span{
              margin-left: 20px;
          }
      }
    }
  }
}
</style>
