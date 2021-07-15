<template>
  <div id="mainpage">
    <el-container class="box">
      <el-container class="content">
        <el-aside class="aaaaa">
          <div class="aside_yun">
            <span class="aside_yun_span"> 云盘</span>

          <el-radio-group v-model="newisCollapse" class="asideBtn" id="butt">
            <el-radio-button :label="false" class="asideBtn11"
              ><i class="el-icon-s-unfold"></i> </el-radio-button>
            <el-radio-button :label="true" class="asideBtn22"
              > <i class="el-icon-s-fold"></i></el-radio-button>
          </el-radio-group>
          </div>


          <div class="search_box">
            <el-input
              placeholder="搜索"
              size="small"
              style="width: 254px"
              v-model="search"
              class="input-with-select"
            >
              <el-button
                slot="append"
                icon="el-icon-search"
              ></el-button>
              <!-- 缩进显示 -->
            </el-input>

          </div>
          
           <el-menu
            :default-active="$route.path"
            router
            unique-opened
            class="el-menu-vertical-demo"
            :collapse="newisCollapse"
            @select="handleSelect"
            
          >
            <!-- :class="{ on: index == isActive }"  上边里边的-->

            <!-- <el-menu-item index="/mainpage/homepage">
              <div class="aaaa tspace_businessmanagement"></div>
              <span slot="title" class="aside_title">主页</span>
            </el-menu-item>
            <el-menu-item index="/mainpage/myspace">
              <div class="aaaa tspace_analysis"></div>
              <span slot="title" class="aside_title">我的空间</span>
            </el-menu-item>
            <el-menu-item index="/mainpage/Commons">
              <div class="aaaa tspace_systemmanagement"></div>
              <span slot="title" class="aside_title">共享空间</span>
            </el-menu-item>
            <el-menu-item index="/mainpage/Collection">
              <div class="aaaa tspace_collection"></div>
              <span slot="title" class="aside_title">收藏</span>
            </el-menu-item>
            <el-menu-item index="/mainpage/recycle">
              <div class="aaaa tspace_recycle"></div>
              <span slot="title" class="aside_title">回收站</span>
            </el-menu-item> -->

                 <div>
              <el-menu-item
                @click="check2(item, index)"
                :index='item.luyou'
                :class="{ on: index == isActive }"
                v-for="(item, index) in listTow"
                :key="index"
              >
              <i></i>
                <div class="aaaa">
                  <img :src="item.src" alt="" />
                </div>
                <div class="ad_one" >
                  <p style="margin:0;">{{ item.name }}</p>
                </div>
              </el-menu-item>
              
            </div>


          </el-menu>
        </el-aside>

        <div class="rightcentet" style="width: 100%">
          <router-view></router-view>
        </div>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      search:"",
      newisCollapse: false,
      activeIndex: "",
      isActive: 1,
        listTow: [
        {
          name: "主页",
          src: require("../assets/images/20x20/homepage.png"),
          luyou:"/mainpage/homepage",
        },
        {
          name: "我的空间",
          src: require("../assets/images/20x20/mywzq.png"),
          luyou:"/mainpage/myspace",
        },
        {
          name: "共享空间",
          src: require("../assets/images/20x20/share.png"),
           luyou:"/mainpage/Commons",
        },
        {
          name: "收藏",
          src: require("../assets/images/20x20/collection.png"),
           luyou:"/mainpage/Collection",
        },
        {
          name: "回收站",
          src: require("../assets/images/20x20/recycle.png"),
           luyou:"/mainpage/recycle",

        },
      ],
    };
  },
  methods: {
      check2(row, index) {
        console.log(row,index,"没那么简单")
      this.isActive = index;
      sessionStorage.setItem("demo_index",index)
    },
     handleSelect(key, keyPath) {
      //  console.log(keyPath,key,"吾问无为谓")
      this.activeIndex = keyPath;
    },
    Resize() {
     
      $(".asideBtn11").css({ display: "none" });
      
    },
  },
  mounted() {
    if(sessionStorage.getItem("demo_index") == undefined){
      this.isActive = 1;
    }else{
      this.isActive = 1;
    }
    $(".aaaaa").css({ width: 300 });
    this.Resize();
    let _this = this;

        $(window).resize(function () {
      var Width = $(window).width() - 300;
      var Height = document.documentElement.clientHeight - 65;
      if (_this.ifRetrieval) {
        _this.tableHeight = Height - 96;
      }
      if (_this.ifTestBacklog) {
        _this.tableHeight = Height - 123;
      }
      $(".aside1").css({ height: Height - 40 });
      $(".main").css({ height: Height });
      $(".data_retrieval").css({ height: Height - 36 });
      $(".retrieval_aside").css({ height: Height - 60 });
      $(".retrieval_main").css({ height: Height - 60 }, { width: Width });
      $(".retrieval_main_mask").css({ height: Height - 60 });
      $(".test_backlog").css({ height: Height - 36 });
      $(".test_aside").css({ height: Height - 60 });
      $(".test_main").css({ height: Height }, { width: Width });
      $(".test_main_mask").css({ height: Height - 60 });
    });

  },
  watch: {
    newisCollapse: {
      handler(newName, oldName) {
        if (this.newisCollapse) {
          $(".aaaaa").css({ width: 60 });
          $(".asideBtn11").css({ display: "block" });
          $(".asideBtn22").css({ display: "none" });
          $(".el-radio-button").css({ width: 60 });
          // $(" #butt .el-radio-button__inner").css({ width: 60 });
          $(".aside_yun_span").css({display:"none"});
        } else {
          $(".aaaaa").css({ width: 300 });
          $(".asideBtn11").css({ display: "none" });
          $(".asideBtn22").css({ display: "block" });
          // $(" #butt .el-radio-button__inner").css({ width: 200 });
           $(".aside_yun_span").css({display:"block"});
        }
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
<style scoped lang="less">
#mainpage {
   width: 100%;
    background: white;
    height: 100% !important;
  .box {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    min-width: 1000px;
    background-color: #f2f2f5;
    .content {
      width: 100%;
      .asideBtn11 {
        height: 20px;
      }
      .asideBtn22 {
        height: 20px;
      }
      .aaaa {
        margin-right: 20px;
        width: 20px;
        height: 23px;
        background-repeat: no-repeat;
        background-size: 16px 16px;
        vertical-align: middle;
      }
      .aaaaa {
        // transition: all 0.3s ease-out;
        position: relative;
        z-index: 1;
        width: 100%;
        background-color: #fff;
        -webkit-box-shadow: 1px 0px 5px #d0d0d3;
        -moz-box-shadow: 1px 0px 5px #d0d0d3;
        box-shadow: 1px 0px 5px #d0d0d3;
        .iconfont:hover{
          color: #242425;
        }
          .asideBtn22{
           width: 0px  !important;
        }
        .el-radio-group{
           position: absolute;
           right: 40px;
        }
        .asideBtn11{
          width: 0px  !important;
        }
      }
      .aaaaa {
        // transition: all 0.3s ease-out;
        position: relative;
        z-index: 1;
        width: 100%;
        background-color: #fff;
        .aside_yun{
               display: flex;
            height: 55px;
            line-height: 55px;
            justify-content: space-between;
            padding: 0 30px;
            border-bottom: 2px solid #f2f2f2;
        }
             .search_box {
          width: 320px;
          height: 55px;
          line-height: 55px;
          padding-left: 20px;
          border-bottom: 2px solid #f2f2f2;
        }
      }
    }
  }
}
</style>
<style lang="less">


.el-icon-close {
  position: absolute !important;
  right: 10px !important;
  top: 13px !important;
}
	
#mainpage {
  width: 100%;
   
  
  .el-menu--collapse {
    width: 60px !important;
  }
  // .el-radio-group {
  //         position: fixed;
  //         z-index: 1000;
  //         bottom: 0px;
  // }

  .is-closable:hover {
    padding-left: 20px !important;
  }
  .el-tabs--card > .el-tabs__header .el-tabs__item.is-active.is-closable {
    padding-left: 20px !important;
    padding-right: 0px !important;
  }

  .el-tabs__item {
    text-align: left;
  }
  .el-tabs__nav .el-tabs__item:nth-child(1) span {
    display: none;
  }
  .el-main {
    margin: 0px;
    padding: 0px !important;
  }
  .el-menu-item {
    padding-left: 20px !important;
    height: 35px;
    line-height: 35px;
    display: flex;
    color: #6C6E71;
    font-weight: 500;
    span {
      font-weight: 500;
    }
  }
  .el-menu-item:hover {
    background-color: #F2F2F2 !important;
    color: #6C6E71 !important;
  }

  .el-menu-item.is-active {
    background-color: #F2F2F2 !important;
    color: #6C6E71 !important;
  }

  .box {
    .content {
      //APP中公共样式
        .asideBtn22{
          width: 0px;
        }
    .el-aside {
  
        width: 200px;
        .el-menu-vertical-demo {
          font-weight: bold; //导航样式
          background-color: #fff;
           i {
            display: none;
            width: 4px;
            height: 35px;
            position: absolute;
            left: 0;
            // top: 50%;

            background: #06C461;
          }
          .on i {
            display: block !important;
          }
        }
        .el-radio-group {
          .el-radio-button {
            width: 100%;
            input {
              width: 100%;
              margin: 0;
            }
            i {
              font-size: 20px;
            }
            .el-radio-button__inner {
              display: block;
              padding: 0;
              height: 40px;
              line-height: 60px;
              width: 100%;
              border: none;
              color: #CBD0CE;
            }
          }
        }
      }
      .el-aside::-webkit-scrollbar {
        display: none;
      }
      .el-radio-button {
        position: absolute;
        z-index: 2;
        margin: 0px;
        width: 65px;
        top: 0px;
        left: 0px;
        -webkit-box-shadow: 0px 0px 5px #d0d0d3;
        -moz-box-shadow: 0px 0px 5px #d0d0d3;
        box-shadow: 0px 0px 5px #d0d0d3;
     
      }
    }
  }

  form {
    .el-form-item {
      margin-bottom: 30px;
    }
    .el-form-item__label {
      //label 样式
      padding: 0px;
      line-height: 5px;
    }
    textarea {
      height: 60px;
    }
  }

  //导航栏
  .el-submenu__title {
    height: 45px;
    line-height: 45px;
  }

  //导航栏
  .el-menu-item-group__title {
    padding: 0px;
  }

  //导航栏
  .el-submenu {
    .el-menu-item {
      height: 40px;
      line-height: 40px;
    }
  }

  //导航栏
  .public_paging {
    .el-pagination {
      padding: 5px 5px;
    }
  }

  .el-collapse {
    .el-collapse-item__arrow {
      margin: 0px;
    }
    .el-collapse-item {
      border: none;
      .el-collapse-item__wrap {
        border: none;
      }
    }
  }

  .el-dialog {
    //弹框自适应
    overflow: auto;
    margin-bottom: 0px; //弹框遮罩部分
    .el-dialog__header {
      //弹框头部高度取消
      padding: 0px;
    }
    .el-dialog__body {
      padding: 0px;
    }
    .el-dialog__footer {
      padding-right: 30px;
      margin-top: 20px;
    }
    //弹窗
    .el-dialog__header {
      position: relative;
      z-index: 1;
    }
  }

  .el-upload {
    .el-upload__input {
      display: none !important;
    }
  }

  .el-aside {
    width: 200px;
 
  }

  .el-progress {
    text-align: center;
    .el-progress-bar__outer {
      border-radius: 0px;
    }
    .el-progress-bar__inner {
      border-radius: 0px;
    }
    .el-progress-bar__inner {
      background-color: #00a43c;
    }
  }
  .el-tabs__item {
    font-size: 13px;
    color: #000000 !important;
    border-width: none !important;
    width: 150px !important;
  }
  .el-table {
    .el-tabs__item .is-active {
      color: #70bfbc;
    }
    tr {
      font-size: 12px;
      th {
        color: #000;
        font-weight: 500;
        padding-left: 3px;
        background-color: #e0e4ec !important;
      }
      td {
        padding-left: 3px;
        color: #2a304d;
      }
    }
  }

  .el-tabs {
    .el-tabs__item {
      border-radius: 8px 8px 0px 0px;
    }
    .el-tabs__item.is-active {
      background-color: white;
      font-weight: 400 !important;
    }
  }
  a {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
  .el-tag--light {
    position: absolute;

    right: 5px;
    top: 35%;
    text-align: center;
  }

}
</style>


