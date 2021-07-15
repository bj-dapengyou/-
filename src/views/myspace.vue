<template>
  <div id="myspace">
    <div class="main_top">
      <div class="top_left">

        <el-upload
          class="upload-demo"
          action="#"
         :on-preview="handlePreview"
          :http-request="http_request"
          :before-upload="beforeAvatarUpload"
          :file-list="fileList"
          :on-change="handle_Change"
        >
        <img src="../assets/images/20x20/upload.png" alt="" />
          <span class="upload_sc">上传</span>
        </el-upload>
      </div>
      <div class="top_right">
        <img src="../assets/images/20x20/folder.png" alt="" />
        <span @click="newwja()" style="font-size: 14px">新建文件夹</span>
      </div>
    </div>

    <div class="header">
      <!-- <h5>我的空间 ></h5> -->

      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/myspace' }">我的空间 ></el-breadcrumb-item>
        <!-- <el-breadcrumb-item>广盈集团</el-breadcrumb-item> -->
      </el-breadcrumb>

    </div>

    <div class="dabox">
      <div class="table_box">
        <el-table
          :data="tableData"
          style="width: 100%"
          :show-overflow-tooltip="true"
          :highlight-current-row="true"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="date" label="名称" width="550" show-overflow-tooltip>
            <template scope="scope">
              <img
                v-if="/.xls/.test(scope.row.date)"
                src="../assets/images/20x20/excel.png"
                alt=""
              />
              <img
                v-if="/.doc/.test(scope.row.date)"
                src="../assets/images/20x20/word.png"
                alt=""
              />
              <img
                v-if="/.pdf/.test(scope.row.date)"
                src="../assets/images/20x20/pdf.png"
                alt=""
              />
              <img
                v-if="/.jpg/.test(scope.row.date)"
                src="../assets/images/20x20/Jpg.png"
                alt=""
              />
              <img
                v-if="/.png/.test(scope.row.date)"
                src="../assets/images/20x20/collection.png"
                alt=""
              />
              <img
                v-if="/.ppt/.test(scope.row.date)"
                src="../assets/images/20x20/ppt.png"
                alt=""
              />
              <span class="table_file"   @click="folder(scope)"  v-if="scope.row.inp_mc == 1">{{ scope.row.date }}</span>
              <el-input
                v-else
                v-model="scope.row.date"
                @keyup.enter.native="searchAllCompany(scope.row)"
                placeholder="请输入内容"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="所有者" >
          </el-table-column>
          <el-table-column prop="address" label="修改时间" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="box_size" label="大小"> </el-table-column>
          <el-table-column prop="box_size" label="">

            <template slot-scope="scope">
              <el-popover placement="bottom" width="100" trigger="click" :ref="`popover-${scope.$index}`">
                <p
                  style="cursor: pointer;border-bottom:1px solid #D7D7D7;"
                  class="el_table"
                  @click="Authority(scope)"
                >
                 <img
                    src="../assets/images/16x16/jurisdiction.png"
                    alt=""
                    class="share_two"
                  />
                 <span>权限管理 </span> 
                </p>
                <p
                  style="cursor: pointer"
                  class="el_table"
                    @click="share(scope)"
                >
                  <img
                    src="../assets/images/16x16/share_two.png"
                    alt=""
                    class="share_two"
                  />
                  <span>分享</span>
                  
                </p>
                <!-- 分享模态框 -->
                <el-dialog
                  :append-to-body="true"
                  :close-on-click-modal="close_modal"
                  title="提示"
                  :visible.sync="dialogVisible"
                  width="30%"
                  :before-close="handleClose"
                >
                  <span>这是一段信息</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false"
                      >确 定</el-button
                    >
                  </span>
                </el-dialog>

                <p
                  style="cursor: pointer;border-bottom:1px solid #D7D7D7;"
                  class="el_table"
                  @click="upload_sc(scope)"
                >
                <span>上传</span>
                  
                </p>
                <p
                  style="cursor: pointer"
                  class="el_table"
                  @click="download(scope)"
                >
                <span>下载</span>
                  
                </p>
                <p
                  style="cursor: pointer"
                  class="el_table"
                  @click="rename(scope)"
                >
                <span>重命名</span>
                  
                </p>
                <p
                  style="cursor: pointer"
                  class="el_table"
                  @click="move_to(scope)"
                >
                <span>移动至</span>
                  
                </p>
                <p
                  style="cursor: pointer;border-bottom:1px solid #D7D7D7;"
                  class="el_table"
                  @click="collection(scope)"
                >
                <span>添加至个人收藏</span>
                  
                </p>
                <p
                  style="cursor: pointer"
                  class="el_table"
                  @click="remove(scope)"
                >
                  <img
                    src="../assets/images/16x16/remove_two.png"
                    alt=""
                    class="share_two"
                  />
                  <span>移出</span>
                  
                </p>
                <span class="span4" slot="reference">
                  <img
                    style="cursor: pointer"
                    src="../assets/images/small/u1920.png"
                    alt=""
                /></span>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>
      
      <div class="box_right">
        <div class="box_top_ri">
          <h6>广盈集团</h6>
          <button class="gy_fenxiang" @click="share_three">
            <img src="../assets/images/20x20/fenxiang.png" alt="" /> 分享
          </button>
        </div>
        <div class="box_cente">
          所有者：<span style="color: #333333">董炜</span>
        </div>
        <div class="box_bottom">
          <p style="font-size: 12px; height: 10px">
            认证类型：<span>服务认证</span>
          </p>
          <p style="font-size: 12px; height: 10px">
            认证对象：<span>10kV不停电带电作业</span>
          </p>
          <p class="miaoshu">
            描述：<span>
              无锡广盈集团有限公司成立于1998-11-06，法定代表人为蒋永平，注册盗本为20500万元人民币，统—社会信用代码为91320200250540560R。企业地址位于无锡市惠山区堰桥街道西昌路18
              </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList:[],
      base_64img:"",
      file_name:"",
      tipVisibles: false,
      close_modal: false,
      dialogVisible: false,
      sjdate: "",
      tableData: [
        {
          date: "广盈集团",
          name: "董炜",
          address: "2021-05-12 21:39",
          box_size: "--",
          inp_mc: "1",
        },
        {
          date: "强制性产品认证实施规则—工厂检查通用要求—CNCA-00C-006.docx",
          name: "董炜",
          address: "2021-05-12 21:39",
          box_size: "89KB",
          inp_mc: "1",
        },
        {
          date: "服务认证证书.jpg",
          name: "董炜",
          address: "2021-05-12 21:39",
          box_size: "1326kb",
          inp_mc: "1",
        },
        {
          date: "认证机构通报系统认证领域代码对照表.xls",
          name: "董炜",
          address: "2021-05-12 21:39",
          box_size: "32kb",
          inp_mc: "1",
        },
        {
          date: "经批准的认证机构名称和业务范围.pdf",
          name: "董炜",
          address: "2021-05-12 21:39",
          box_size: "924kb",
          inp_mc: "1",
        },
      ],
    };
  },
  methods: {
    // 名称点击
    folder(scope){
        console.log(scope.row,"名称点击")
    },
    // 广盈集团分享
    share_three(){

      console.log("qwe")

    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 移出
    remove(scope){
        scope._self.$refs[`popover-${scope.$index}`].doClose()
    },
    // 添加至个人收藏
    collection(scope){
      scope._self.$refs[`popover-${scope.$index}`].doClose()
    },
    // 移动至
    move_to(scope){
      scope._self.$refs[`popover-${scope.$index}`].doClose()
    },
    // 重命名
    rename(scope){
        scope._self.$refs[`popover-${scope.$index}`].doClose()  
         console.log(scope.row);
         scope.row.inp_mc = "";
    },
    // 下载
    download(scope){
          scope._self.$refs[`popover-${scope.$index}`].doClose()  
    },
    // 上传
    upload_sc(scope){
      scope._self.$refs[`popover-${scope.$index}`].doClose()  
    },
    // 分享事件
    share(scope){
      scope._self.$refs[`popover-${scope.$index}`].doClose()    
      this.dialogVisible = true
    },
    // 权限管理
    Authority(scope) {
      // this.tipVisibles.splice(index, 1, false);
      scope._self.$refs[`popover-${scope.$index}`].doClose()
      console.log(scope.row);
    },
    // 新建文件夹
    newwja() {
      var aData = new Date();
      console.log(aData);
      this.sjdate =
        aData.getFullYear() +
        "-" +
        (aData.getMonth() + 1) +
        "-" +
        aData.getDate() +
        " " +
        aData.getHours() +
        ":" +
        aData.getMinutes();
      let objj = {
        date: "",
        name: "王小虎",
        address: this.sjdate,
        box_size: "--",
        inp_mc: "",
      };
      this.tableData.push(objj);
    },
    searchAllCompany(row) {
      console.log(row.date.length, "123");
   
        if (row.date == "") {
            this.$message({
              message: "输入内容不能为空",
              type: "warning",
            });
        
          } else {
                   if(row.date.length > "30"){
                      this.$message({
                        message: '文件夹的名称不能超过30个字节',
                        type: 'warning'
                      });
                      return ;
                  }
               row.inp_mc = 1;
          }
   
    },

    // 上传
 
    handlePreview(file) {
      console.log(file);
    },
    // 自定义上传
      http_request(params) {
      var _this = this;
      console.log("http_request", params);
      this.file_name = params.file.name;
      if (params.file.name) {
        var reader = new FileReader();
        //通过文件流将文件转换成Base64字符串
        reader.readAsDataURL(params.file);
        reader.onloadend = function () {
          
          // 把转换过得base赋值给全局变量
          // 这里reader.result就是转换好的bsae64格式图片
          this.base_64img = reader.result;
          console.log(params.file.name);
          console.log(this.base_64img);

        };
      }
        var aData = new Date();
        console.log(aData);

         this.sjdate =
        aData.getFullYear() +
        "-" +
        (aData.getMonth() + 1) +
        "-" +
        aData.getDate() +
        " " +
        aData.getHours() +
        ":" +
        aData.getMinutes();
        let obj_box = {
            date: this.file_name,
            name: "王小虎",
            address:this.sjdate,
            box_size: params.file.size /1024 + "kb",
            inp_mc: 1,
          };
            this.tableData.push(obj_box);
    },

    // 上传文件限制
        beforeAvatarUpload(file) {
     
    },
       handle_Change(file, fileList){
      console.log(file,"123456", fileList,"00000000000000");
       },
 
  },
};
</script>

<style lang="less" scoped>
#myspace {
  background: white;
  height: 100%;
  // /deep/ .el-breadcrumb__inner {
  //   color: red !important;
  // }
  .main_top {
    width: 100%;
    height: 56px;
    line-height: 56px;
    background: white;
    border-bottom: 2px solid #f2f2f2;
    display: flex;
    .top_left {
      display: flex;
      margin-left: 40px;
      margin-right: 40px;
      cursor: pointer;
      .upload_sc {
        font-size: 14px;
      }
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-right: 5px;
        // margin-top: 14px;
      }
    }
    .top_right {
      cursor: pointer;
      img {
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
  .header {
    margin-left: 40px;
    font-size: 18px;
    .el-breadcrumb{
      margin: 20px 0;
    }
  }
  .dabox {
    display: flex;
    margin-left: 30px;
    .table_box {
      width: 80%;
      // border-right: 1px solid #D7D7D7;
      // padding-right: 20px;
    }
    .box_right {
      width: 20%;
      height: 370px;
      border-left: 1px solid #e0e0e0;
      padding-left: 20px;
      // margin-left: 20px;
      // padding-bottom: 100px;
      .box_top_ri {
        display: flex;
        justify-content: space-between;
        h6 {
          font-size: 14px;
          height: 10px;
          color: #505255;
          margin-bottom: 20px;
          margin-top: 10px;
          min-width: 70px;
        }
        .gy_fenxiang {
          background: white;
          border: 1px solid #aaaaaa;
          border-radius: 3px;
          width: 86px;
          height: 32px;
          line-height: 30px;
          display: flex;
          justify-content: space-around;
          margin-right: 20px;
          color: #6c6e71;
          cursor: pointer;
          img {
            margin-top: 4px;
          }
        }
      }
      .box_cente {
        color: #505255;
        font-size: 12px;
        margin-bottom: 20px;
      }
      .box_bottom {
        color: #505255;
        // font-size: 14px;
        .miaoshu {
          width: 220px;
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
<style lang="less">
.el-popover {
  // text-align: center !important;
  line-height: 30px !important;
  padding: 5px 20px !important;
  min-width: 0 !important;
  font-size: 12px !important;
  text-align: left !important;
  text-indent: 30px;
  width: 230px !important;
    .share_two{
        margin-left: -25px !important;
        vertical-align: middle;
        margin-right: 10px;
      }
      span{
        margin-left: 10px;
      }
}
.el_table:hover {
  background: #c5c5c5 !important;
}
#mainpage {
  .el-upload-list {
    display: none;
  }
  .el-table {
    // margin-bottom: 100px;
    .cell {
      color: #6c6e71;
    }
    tr {
      th {
        background-color: white !important;
      }
    }
    img {
      vertical-align: middle !important;
      margin-right: 5px !important;
    }
    .table_file{
      color: #6C6E71;
    }
    .table_file:hover{
      color: #09AAFF;
      cursor: pointer;
    }
    
  }
    
}
</style>