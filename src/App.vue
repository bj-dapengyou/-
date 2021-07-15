<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
html{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  a:link {
    color: #fff;
  }
  a:visited {
    color: #fff;
  }
  a:hover {
    color: #fff;
  }
  a:active {
    color: #fff;
  }
  [v-cloak] {
    display: none;
  }
  position: relative;
  font-family: "宋体,微软雅黑";
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  min-width: 1280px;
  width: 100%;
  height: 100%;
}
</style>
