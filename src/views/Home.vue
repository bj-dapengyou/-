<template>
  <div id="home" @click="remove()">
    <el-container class="box" style="height: 100%;">
      <div class="demo-type">
        <div @click.stop="Active()">
          <el-avatar
            class="el-avatar1"
            :size="60"
            src="../assets/images/andy.png"
          >
            <img style="width: 100%" src="../assets/images/company2.png" />
          </el-avatar>
        </div>
        <div
          class="pull_pim"
          @click.stop="Active()"
          ref="xianshi"
          v-show="isshow"
        >
          <div class="pull_pim_top">
            <el-avatar
              :size="60"
              class="el-avatar2 item2"
              src="../assets/images/andy2.png"
            >
              <img style="width: 100%" src="../assets/images/company.png" />
            </el-avatar>
            <div class="pull_pim_top_right">
              <p class="pull_pim_top_right_p1">{{ this.realName }}</p>
              <p class="pull_pim_top_right_p2">{{ this.orgorgName }}</p>
            </div>
          </div>
          <ul class="ul1">
            <li @click="findpassword(1)">
              个人信息<img src="../assets/images/small/yjt.png" alt="" />
            </li>
            <li @click="findpassword(2)">
              账号与安全<img src="../assets/images/small/yjt.png" alt="" />
            </li>
            <li @click="findpassword(3)" style="display: none">
              修改头像<img src="../assets/images/small/yjt.png" alt="" />
            </li>
            <li @click="findpassword(4)">
              修改密码<img src="../assets/images/small/yjt.png" alt="" />
            </li>
          </ul>
          <ul class="ul2">
            <li @click="switchs">
              切换账号<img src="../assets/images/small/yjt.png" alt="" />
            </li>
            <li @click="logOut">退出登录</li>
          </ul>
        </div>
      </div>



      <el-aside class="aside">
        <div class="aside_top"></div>

        <div v-if="total_zong !== 0">
          <!-- <el-badge :value="total_zong" :max="99" class="item"> </el-badge> -->
          <el-badge :value="3" :max="99" class="item"> </el-badge>
        </div>
      

        <el-menu
          :default-active="$route.path"
          router
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
        >
          <el-menu-item index="/mainpage/myspace">
            <div class="aaaa tspace_home">
            </div>
              <p  class="aaa_one" >消息</p>
          </el-menu-item>
          <el-menu-item index="/about">
            <div class="aaaa tspace_business">
            </div>
            <p class="aaa_one">云盘</p>
          </el-menu-item>
          <el-menu-item index="/maillist">
            <div class="aaaa tspace_administration">
            </div>
            <p class="aaa_one" >通讯录</p>
          </el-menu-item>
        </el-menu>

        <div class="set_up">
          <div class="set_up_wz">
            <div class="set_bjt"></div>
              <!-- <img src="../assets/images/20x20/setup.png" alt=""> -->
              <p >设置</p>
          </div>
        </div>
      </el-aside>



      <el-container class="content">
        <el-header class="header" style="height: 65px">
          <!-- <div
            class="company_name2"
            :style="{ backgroundImage: 'url(' + logo + ')' }"
          ></div> -->
          <div class="company_name">
            <span class="company_name_span">{{ companyName }}</span>
          </div>
       
        </el-header>
        <el-main class="main" style="background: #f5f7fa">
          <router-view></router-view>
        </el-main>
      </el-container>


      
    </el-container>
  </div>
</template>

<script>
import {
  httpinfor,
} from "./../assets/js/http.config";
import Logo from "../assets/images/toplogo2.png";

export default {
  name: "home",
  data() {
    return {
      total_zong: "",
      zuojian: 1,
      isshow: false,
      logo: Logo,
      placeholder: "搜索申请及更多",
      zIndex: 0, //层级
      ifPIM: false, //账号信息弹窗
      ifPassword: false, //修改密码弹窗
      realName: JSON.parse(sessionStorage.getItem("realName")),
      userName: JSON.parse(sessionStorage.getItem("username")),
      orgName: JSON.parse(sessionStorage.getItem("orgName")),
      orgorgName: sessionStorage.getItem("orgorgName"),
      namename: sessionStorage.getItem("namename"),

      labelF: "left",
      forms: {},
      form: { oldPass: "", pass: "", checkPass: "" },
      rules: {},
      // realName: "",
      flag: true,

      activerouter: "",
      isCollapse: true,
      companyName: "中电赛普认证云资源",
      select: "",
      input: "",
      direction: "DESC", //排序字段
      column: { prop: "createTime" }, //排序当前列
      total: "",
    };
  },
  created() {},
  updated() {},
  methods: {
 
    switchs() {
      //切换账号
      this.$axios({
        method: "post",
        url: httpinfor() + "logout",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": sessionStorage.getItem("token"),
        },
      }).then((res) => {
        sessionStorage.setItem("token", "");
        this.$router.push("/login");
      });
    },

    gaibian(row) {},
    pushHome() {
      this.$router.push({ path: "/about" });
    },
    findpassword(value) {
      this.$refs.xianshi.style.display = "none";
      if (value == 1) {
        this.$router.push("/myinformation/accountnumber");
      } else if (value == 2) {
        this.$router.push("/myinformation/company");
      }
      // else if (value == 3) {
      //   this.$router.push("/myinformation/headportrait");
      else if (value == 4) {
        this.$router.push("/myinformation/password");
      }
      // window.open("findPassword.html", "_blank");
    }, //找回密码
    remove() {
      this.$refs.xianshi.style.display = "none";
      this.zuojian = 1;
    },
    Active() {
      if (this.zuojian == 1) {
        this.$refs.xianshi.style.display = "block";
        this.zuojian = 2;
      } else {
        this.zuojian = 1;
        this.$refs.xianshi.style.display = "none";
      }
    },
    See() {
      window.open(
        "http://www.epri.sgcc.com.cn/TMS_WEB/valiReportHome.action",
        "_blank"
      );
    },
    out() {
      this.$confirm("是否退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        cancelButtonClass: "cancelButton",
        confirmButtonClass: "confirmButton",
        type: "warning",
      }).then(() => {
        this.$axios({
          method: "post",
          url: httpinfor() + "logout",
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": sessionStorage.getItem("token"),
          },
        }).then((res) => {
          this.$message({
            type: "success",
            message: "退出成功!",
          });

          setTimeout(fun, 1000);
          var that = this;
          function fun() {
            sessionStorage.setItem("token", "");
            sessionStorage.clear();
            that.$router.push("/login");
          }
        });
      });
    },

    attestation() {
      if (sessionStorage.getItem("companyStatus") == "03") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    
    },

    saveBtn() {
      this.ifPassword = false;
    }, //修改密码保存按钮
    closeBtn() {
      this.ifPassword = false;
    }, //修改密码取消按钮
    logOut() {
      this.$confirm("确定退出登录吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        cancelButtonClass: "btn-custom-cancel",
        confirmButtonClass: "btn-custom-firm",
        type: "warning",
      }).then(() => {
        this.$axios({
          method: "post",
          url: httpinfor() + "logout",
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": sessionStorage.getItem("token"),
          },
        }).then((res) => {
          sessionStorage.setItem("token", "");
          this.$router.push("/login");
        });
      });
    }, //退出登录

    Resize() {
      var Height = $(window).height() - 65;
      $(".main").css({ height: Height });
    },

  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  mounted() {
   
  },
  watch: {
    isCollapse: {
      handler(newName, oldName) {
        var l = document.body.clientWidth;
        // $(".el-radio-button").css({ width: l });
        // $(".el-radio-button__inner").css({ width: l });
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
#home {
  height: 100%;
  .el-aside {
    .item {
      position: fixed;
      z-index: 1000;
      width: 20px;
      left: 32px;
      margin-top: 4px;
    }
  }

  .el-avatar--circle {
    border-radius: 2px !important;
  }
  .box {
    position: relative;
    z-index: 0;
    width: 100%;
    min-width: 1000px;
    background-color: #f2f2f5;
    .el-main {
      padding: 0px;
      height: 100%;
    }
    .demo-type {
      width: 85px;
      position: absolute;
      z-index: 1000000000000;
      .el-avatar1 {
        width: 35px !important;
        height: 35px !important;
        margin-top: 12px;
        margin-left: 12px;
      }
      .el-avatar2 {
        width: 55px !important;
        height: 55px !important;
        margin-top: 25px;
        margin-left: 12px;
      }
      .pull_pim {
        display: none;
        position: absolute;
        top: 10px;
        left: 110px;
        margin-left: -45px;
        width: 280px;
        height: 326px;
        border-radius: 5px;
        -webkit-box-shadow: 0px 2px 5px 2px #d0d0d3;
        -moz-box-shadow: 0px 2px 5px 2px #d0d0d3;
        box-shadow: 0px 2px 5px 2px #d0d0d3;
        background-color: #ffffff;
        .pull_pim_top {
          width: 100%;
          height: 100px;
          background-color: #073f86;
          display: flex;
          color: white;
          .pull_pim_top_right {
            p {
              padding-left: 20px;
            }
            .pull_pim_top_right_p1 {
              font-size: 18px;
              margin-top: 26px;
            }
            .pull_pim_top_right_p2 {
              font-size: 13px;
              padding-top: 5px;
            }
          }
        }
        .ul1 {
          width: 280px;
          height: 135px;
          border-bottom: 1px solid #d9dcdf;
          font-size: 13px;
          cursor: pointer;
          padding-left: 0;
          margin-top: 0;
          img {
            position: absolute;
            width: 10px;
            height: 10px;
            right: 15px;
            top: 19px;
          }
          li {
            height: 45px;
            line-height: 45px;
            list-style: none;
            padding-left: 20px;
            position: relative;
          }
          li:hover {
            background-color: #ecf5ff;
            color: #2196f3;
          }
        }
        .ul2 {
          width: 280px;
          height: 100px;
          font-size: 13px;
          cursor: pointer;
          padding-left: 0;
          margin-top: -13px;
          img {
            position: absolute;
            width: 10px;
            height: 10px;
            right: 15px;
            top: 19px;
          }
          li {
            height: 45px;
            line-height: 45px;
            list-style: none;
            padding-left: 20px;
            position: relative;
          }
          li:hover {
            background-color: #ecf5ff;
            color: #2196f3;
          }
        }
      }
    }
    .demo-type:hover .pull_pim {
      // display: block;
      // margin-left: 20px;
    }
    .aside {
      position: relative;
      z-index: 1;
      width: 100%;
      background-color: #2a2b2c;
      // -webkit-box-shadow: 1px 0px 5px #d0d0d3;
      -moz-box-shadow: 1px 0px 5px #d0d0d3;
      // box-shadow: 1px 0px 5px #d0d0d3;
      .personalDetails {
        width: 65px;
        height: 56px;
        .title_user {
          margin-top: 10px;
          overflow: hidden;
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 30px;
          background-color: #eee;
          color: #cccccc;
        }
        i {
          position: absolute;
          top: 10px;
          left: 40px;
          overflow: hidden;
          line-height: 40px;
          color: #ccc;
          font-size: 18px;
        }
        .pull_pim {
          display: none;
          position: absolute;
          width: 100px;
          height: 60px;
          z-index: 1000000000000000000000;
          border-radius: 4px;
          -webkit-box-shadow: 0px 2px 5px 2px #d0d0d3;
          -moz-box-shadow: 0px 2px 5px 2px #d0d0d3;
          box-shadow: 0px 2px 5px 2px #d0d0d3;
          background-color: #ffffff;
          font-size: 12px;
          ul {
            width: 100px;
            height: 90px;
            list-style: none;
            li {
              height: 30px;
              line-height: 30px;
              text-align: center;
            }
            li:hover {
              background-color: #ecf5ff;
              color: #70bfbc;
            }
          }
        }
      }
      .personalDetails:hover i {
        color: #70bfbc;
      }
      .personalDetails:hover .pull_pim {
        // display: block;
        margin-left: 20px;
      }
    }
    .aside::-webkit-scrollbar {
      width: 0 !important;
    }
    .aside::-webkit-scrollbar {
      width: 0 !important;
      height: 0;
    }
    .aside_top {
      background-color: #2a2b2c;
      width: 60px;
      height: 60px;
      background-repeat: no-repeat;
      background-size: 22px 22px;
      background-position: center center;
      .item{
        position: absolute;
        left: 0 !important;
      }
      img {
        width: 35px;
        height: 35px;
        margin-left: 12px;
        margin-top: 12px;
      }
    }
    .el-menu-vertical-demo {
      color: #2a304d;
      // font-weight: bold; //导航样式
      background: #2a2b2c;
      width: 60px;
      border: none !important;
    }
    //设置
    .set_up{
      width: 60px;
      height: 56px;
      text-align: center;
      line-height: 0;
      position: absolute;
      bottom: 30px;
      color: #07C160;
      font-size: 12px;
      cursor: pointer;
      
      .set_up_wz{
         .set_bjt{
           margin: 0 auto;
             width: 20px;
            height: 20px;
            background-image: url(../../src/assets/images/20x20/setup.png);
        }
      }

    } 
    .set_up:hover{
        color: white;
        .set_bjt{
          background-image: url(../../src/assets/images/20x20white/setup2.png);
        }
    }
    
    .aaaa {
      margin: 0 auto;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      background-size: 20px 20px;
      vertical-align: middle;
    }
    .aaa_one{
text-align: center;padding-top: 2px; transform: scale(0.9);color: #07C160;
    }
    .header {
      position: relative;
      z-index: 10000000;
      width: 100%;
      height: 56px;
      box-shadow: 0px 0px 5px #d0d0d3;
      background-color: #fff;
      margin-bottom: 10px;
      .company_name2 {
        height: 50px;
        position: absolute;
        width: 225px;
        line-height: 56px;
        font-size: 18px;
        font-weight: bold;
        overflow: hidden;
        background-repeat: no-repeat;
        margin-top: 10px;
      }
      .company_name {
        // left: 243px;
        height: 65px;
        position: absolute;
        margin-left: 0px;
        width: 300px;
        line-height: 65px;
        font-size: 18px;
        overflow: hidden;
        background-repeat: no-repeat;
        background-size: 186.375px 51.86px;
        .company_name_span {
          color: #005650;
          font-weight: 700;
        }
      }
      
 
  
    }
  }
  .el-menu-item{
    color: #fff !important;
    line-height:0px !important;
    font-size: 12px !important;
    font-weight: none !important;
    padding:0 0 !important;
    padding-top: 10px !important;
  }
  .el-menu-item:hover {
    background: #2a2b2c;
    .aaa_one{
      color: #ffffff !important;
    }
  }
  .el-menu-item.is-active {
    background-color: #07C160 !important;
    .aaa_one{

      color: #ffffff !important;
    }
  }
  .el-submenu__title:hover {
    background-color: #254898 !important;
  }
  .el-submenu:hover {
    // background: #254898;
    color: #fff;
  }
  .el-submenu.is-active {
    background-color: #254898 !important;
    color: #ffffff !important;
  }
  .el-menu {
    .tspace_home {
      background-image: url(../../src/assets/images/20x20/news2.png);
    }
    .tspace_business {
      background-image: url(../../src/assets/images/20x20/clouddisk2.png);
    }
    .tspace_administration {
      background-image: url(../../src/assets/images/20x20/maillist2.png);
    }
    .el-menu-item.is-active,
    .el-menu-item:hover,
    .el-submenu__title:hover {
      .tspace_home {
        background-image: url(../../src/assets/images/20x20white/news.png);
      }
      .tspace_business {
        background-image: url(../../src/assets/images/20x20white/clouddisk.png);
      }
      .tspace_administration {
        background-image: url(../../src/assets/images/20x20white/maillist.png);
      }
    }
  }
}
</style>

<style lang="less" >
.aside{
  width: 60px !important;
}
.btn-custom-cancel {
  margin-right: -65px !important;
}
.btn-custom-firm {
  margin-left: -57px !important;
  margin-right: 62px !important;
}
.el-badge__content {
  border: none !important;
  padding: 0 !important ;
  width: 18px;
  height: 18px !important;
  line-height: 16px !important;
  font-weight: 100;
  transform: scale(0.9) !important;
  padding: 0 2px !important;
  background: #FF0000 !important;
}
.el-badge__content.is-fixed {
  top: 9px !important;
  position: absolute;
  top: 0;
  right: -14px !important;
}

.el-button--primary {
  background: #254898 !important;
  border-color: #254898 !important;
}
</style>
