export{
  escState,escState1,
  escSkinState,escGetSampleIsSampling,escGetSampleSampleDetail,escSampleState,escSampleState1,escGetSampleSampleDetail1,escFlowState,escDisposeMethod,//样品状态
  escCustomerClass,escSex,escIsFirst,escCustomerLevel, //客户
  escSexx,escIsFirstt,escCustomerClasss,escCustomerLevell,//客户详情
  escPoaType,escPoaType1,escTestType,escTestType1,escIsOnline,escIsOnline1,escPoaState,escPoaState1,escReportFormat,escChangeStatus, //委托
  escfirstApproveResult,escfirstApproveResultone,//委托审核
  escTaskIdentity,escTaskState,escApproveResult,//委托流程
  escReportSendWay,//报告
}

function escState(data) {
  for (var i in data){
    if(data[i].state=="0"){
      data[i].state="有效"
      data[i].color="#7CC3BA"
    }
    if(data[i].state=="1"){
      data[i].state="作废"
      data[i].color="#aaa"
    }
  }
};//状态转换
function escState1(data) {
  if(data.state=="0"){
    data.state="有效"
    data.color="#7CC3BA"
  }
  if(data.state=="1"){
    data.state="作废"
    data.color="#aaa"
  }
};//状态转换

function escSkinState(data) {
  for (var i in data){
    if(data[i].skinState=="01"){
      data[i].skinState="完好"
    }
    if(data[i].skinState=="02"){
      data[i].skinState="有缺陷"
    }
  }
};//样品状态转换
function escSampleState(data) {
  for (var i in data){
    if(data[i].sampleState=="01"){
      data[i].sampleState="待检"
      data[i].color="#FF5371"
    }
    if(data[i].sampleState=="02"){
      data[i].sampleState="在检"
      data[i].color="#FFA500"
    }
    if(data[i].sampleState=="03"){
      data[i].sampleState="已检"
      data[i].color="#00DA3C"
    }
  }
};//样品待检等状态转换
function escSampleState1(data) {
  if(data.sampleState=="01"){
    data.sampleState="待检"
    data.color="#FF5371"
  }
  if(data.sampleState=="02"){
    data.sampleState="在检"
    data.color="#FFA500"
  }
  if(data.sampleState=="03"){
    data.sampleState="已检"
    data.color="#00DA3C"
  }
};//样品待检等状态转换
function escFlowState(data) {
  for (var i in data){
    if(data[i].flowState=="01"){
      data[i].flowState="接样"
    }
    if(data[i].flowState=="02"){
      data[i].flowState="领样"
    }
    if(data[i].flowState=="03"){
      data[i].flowState="交样"
    }
    if(data[i].flowState=="05"){
      data[i].flowState="客户取样"
    }
    if(data[i].flowState=="06"){
      data[i].flowState="退样"
    }
  }
};//样品流转等状态转换

function escGetSampleIsSampling(data) {
  if(data.isSampling=="01"){
    data.isSampling="是"
  }
  if(data.isSampling=="02"){
    data.isSampling="否"
  }
}//样品是否分制、样
function escGetSampleSampleDetail(data) {
  for (var i in data){
    if(data[i].flowState=="01"){
      data[i].flowState="接样"
    }
    if(data[i].flowState=="02"){
      data[i].flowState="领样"
    }
    if(data[i].flowState=="03"){
      data[i].flowState="交样"
    }
    if(data[i].flowState=="05"){
      data[i].flowState="客户取样"
    }
    if(data[i].flowState=="06"){
      data[i].flowState="退样"
    }

    if(data[i].disposeMethod=="01"){
      data[i].disposeMethod="留样"
    }
    if(data[i].disposeMethod=="02"){
      data[i].disposeMethod="销毁"
    }
    if(data[i].disposeMethod=="03"){
      data[i].disposeMethod="其他"
    }

    if(data[i].sampleState=="01"){
      data[i].sampleState="待检"
      data[i].color="#FF5371"
    }
    if(data[i].sampleState=="02"){
      data[i].sampleState="在检"
      data[i].color="#FFA500"
    }
    if(data[i].sampleState=="03"){
      data[i].sampleState="已检"
      data[i].color="#7CC3BA"
    }
  }
}//样品流转状态、检测状态
function escGetSampleSampleDetail1(data) {
  for (var i in data){
    if(data[i].flowState=="01"){
      data[i].flowState="接样"
    }
    if(data[i].flowState=="02"){
      data[i].flowState="领样"
    }
    if(data[i].flowState=="03"){
      data[i].flowState="交样"
    }
    if(data[i].flowState=="05"){
      data[i].flowState="客户取样"
    }
    if(data[i].flowState=="06"){
      data[i].flowState="退样"
    }

    if(data[i].sampleState=="01"){
      data[i].sampleState="待检"
      data[i].color="#FF5371"
    }
    if(data[i].sampleState=="02"){
      data[i].sampleState="在检"
      data[i].color="#FFA500"
    }
    if(data[i].sampleState=="03"){
      data[i].sampleState="已检"
      data[i].color="#7CC3BA"
    }
  }
}//样品流转状态、检测状态
function escDisposeMethod(data) {
  for (var i in data){
    if(data[i].disposeMethod=="01"){
      data[i].disposeMethod="留样"
    }
    if(data[i].disposeMethod=="02"){
      data[i].disposeMethod="销毁"
    }
    if(data[i].disposeMethod=="03"){
      data[i].disposeMethod="其他"
    }
  }
}//样品流转状态、检测状态

function escCustomerClass(data) {
  for (var i in data){
    if(data[i].customerClass=="01"){
      data[i].customerClass="国网公司系统"
    }
    if(data[i].customerClass=="02"){
      data[i].customerClass="其他电力公司系统"
    }
    if(data[i].customerClass=="03"){
      data[i].customerClass="电力系统外"
    }
  }
}//公司类型转换
function escCustomerClasss(data) {
  for (var i in data){
    if(data[i].customerClass=="01"){
      data[i].customerClass="国网公司系统"
    }
    if(data[i].customerClass=="02"){
      data[i].customerClass="其他电力公司系统"
    }
    if(data[i].customerClass=="03"){
      data[i].customerClass="电力系统外"
    }
  }
}//公司类型转换
function escSex(data) {
  for (var i in data){
    if(data[i].sex=="01"){
      data[i].sex="男"
    }
    if(data[i].sex=="02"){
      data[i].sex="女"
    }
  }
}//性别转换
function escSexx(data) {
  for (var i in data) {
    if (data[i].sex == "01") {
      data[i].sex = "男"
    }
    if (data[i].sex == "02") {
      data[i].sex = "女"
    }
  }
}//性别转换
function escIsFirst(data) {
  for (var i in data){
    if(data[i].isFirst=="01"){
      data[i].isFirst="首要联系人"
    }
    if(data[i].isFirst=="02"){
      data[i].isFirst="非首要联系人"
    }
  }
}//首要联系人转换
function escIsFirstt(data) {
  for (var i in data) {
    if (data[i].isFirst == "01") {
      data[i].isFirst = "首要联系人"
    }
    if (data[i].isFirst == "02") {
      data[i].isFirst = "非首要联系人"
    }
  }
}//首要联系人转换
function escCustomerLevel(data) {
  for (var i in data){
    if(data[i].customerLevel=="1"){
      data[i].customerLevel="重要客户"
    }
    if(data[i].customerLevel=="2"){
      data[i].customerLevel="普通客户"
    }
    if(data[i].customerLevel=="3"){
      data[i].customerLevel="一般客户"
    }
  }
}//客户级别转换
function escCustomerLevell(data) {
  for (var i in data) {
    if (data[i].customerLevel == "1") {
      data[i].customerLevel = "重要客户"
    }
    if (data[i].customerLevel == "2") {
      data[i].customerLevel = "普通客户"
    }
    if (data[i].customerLevel == "3") {
      data[i].customerLevel = "一般客户"
    }
  }
}//客户级别转换

function escPoaType(data) {
  for (var i in data){
    if(data[i].poaType=="01"){
      data[i].poaType="外部委托"
    }
    if(data[i].poaType=="02"){
      data[i].poaType="内部委托"
    }
    if(data[i].poaType=="03"){
      data[i].poaType="盲样委托"
    }
    if(data[i].poaType=="04"){
      data[i].poaType="科研服务"
    }
    if(data[i].poaType=="05"){
      data[i].poaType="CQC抽检服务"
    }
  }
}//委托类型
function escPoaType1(data) {
  if(data.poaType=="01"){
    data.poaType="外部委托"
  }
  if(data.poaType=="02"){
    data.poaType="内部委托"
  }
  if(data.poaType=="03"){
    data.poaType="盲样委托"
  }
  if(data.poaType=="04"){
    data.poaType="科研服务"
  }
  if(data.poaType=="05"){
    data.poaType="CQC抽检服务"
  }
}//委托类型
function escTestType(data) {
  for (var i in data){
    if(data[i].testType=="10"){
      data[i].testType="型式试验"
    }
    if(data[i].testType=="11"){
      data[i].testType="委托检验"
    }
    if(data[i].testType=="12"){
      data[i].testType="抽样检验"
    }
    if(data[i].testType=="13"){
      data[i].testType="其他"
    }
  }
}//检测类型
function escTestType1(data) {
  if(data.testType=="10"){
    data.testType="型式试验"
  }
  if(data.testType=="11"){
    data.testType="委托检验"
  }
  if(data.testType=="12"){
    data.testType="抽样检验"
  }
  if(data.testType=="13"){
    data.testType="其他"
  }
}//检测类型
function escIsOnline(data) {
  for (var i in data){
    if(data[i].isOnline=="01"){
      data[i].isOnline="内部"

    }
    if(data[i].isOnline=="02"){
      data[i].isOnline="外网"
    }
    if(data[i].isOnline=="03"){
      data[i].isOnline="信通"
    }
  }
}//委托来源
function escIsOnline1(data) {
  if(data.isOnline=="01"){
    data.isOnline="内部"

  }
  if(data.isOnline=="02"){
    data.isOnline="外网"
  }
  if(data.isOnline=="03"){
    data.isOnline="信通"
  }
}//委托来源
function escPoaState(data) {
  for (var i in data){
    if(data[i].poaState=="01"){
      data[i].poaState="待检"
      data[i].color="#f00"
    }
    if(data[i].poaState=="02"){
      data[i].poaState="在检"
      data[i].color="#FF7842"
    }
    if(data[i].poaState=="03"){
      data[i].poaState="已检"
      data[i].color="#00DA3C"
    }
    if(data[i].poaState=="04"){
      data[i].poaState="终止"
      data[i].color="#bbb"
    }
    if(data[i].poaState=="05"){
      data[i].poaState="暂存"
      data[i].color="#555"
    }
  }
}//委托
function escPoaState1(data) {
  if(data.poaState=="01"){
    data.poaState="待检"
    data.stateColor="#f00"
  }
  if(data.poaState=="02"){
    data.poaState="在检"
    data.stateColor="#FF7842"
  }
  if(data.poaState=="03"){
    data.poaState="已检"
    data.stateColor="#00DA3C"
  }
  if(data.poaState=="04"){
    data.poaState="终止"
    data.stateColor="#bbb"
  }
  if(data.poaState=="05"){
    data.poaState="暂存"
    data.stateColor="#555"
  }
}//委托
function escReportFormat(data) {
  if(data.reportFormat=="01"){
    data.reportFormat="中文版"
  }
  if(data.reportFormat=="02"){
    data.reportFormat="英文版"
  }
  if(data.reportFormat=="03"){
    data.reportFormat="中英文版"
  }
}//委托
function escChangeStatus(data) {
  for (var i in data){
    if(data[i].changeStatus=="01"){
      data[i].changeStatus="一级待审核"
    }
    if(data[i].changeStatus=="02"){
      data[i].changeStatus="一级审核通过"
    }
    if(data[i].changeStatus=="03"){
      data[i].changeStatus="一级审核不通过"
    }
    if(data[i].changeStatus=="11"){
      data[i].changeStatus="二级待审核"
    }
    if(data[i].changeStatus=="12"){
      data[i].changeStatus="二级审核通过"
    }
    if(data[i].changeStatus=="13"){
      data[i].changeStatus="二级审核不通过"
    }
  }
}//委托
function escfirstApproveResult(data) {
  for (var i in data){
    if(data[i].firstApproveResult=="01"){
      data[i].firstApproveResult="通过"
      data[i].color="#00DA3C"
    }
    if(data[i].firstApproveResult=="02"){
      data[i].firstApproveResult="退回"
      data[i].color="#FF5371"
    }
    if(data[i].firstApproveResult==""){
      data[i].color="#000"
    }
  }
}//委托审核
function escfirstApproveResultone(data) {
  for (var i in data){
    if(data[i].firstApproveResult=="01"){
      data[i].firstApproveResult="通过"
    }
    if(data[i].firstApproveResult=="02"){
      data[i].firstApproveResult="退回"
    }
  }
}//委托审核
function escTaskIdentity(data) {
  for (var i in data){
    if(data[i].taskIdentity=="normal"){
      data[i].taskIdentity="正常";
      data[i].taskIdentitycolor="#00DA3C"
    }
    if(data[i].taskIdentity=="back"){
      data[i].taskIdentity="退回";
      data[i].taskIdentitycolor="#FF5371"
    }
  }
}//委托流程
function escTaskState(data) {
  for (var i in data){
    if(data[i].taskState=="run"){
      data[i].taskState="执行中";
      data[i].taskStatecolor="#FF5371"
    }
    if(data[i].taskState=="finish"){
      data[i].taskState="完成";
      data[i].taskStatecolor="#7CC3BA"
    }
    /*if(data[i].taskState=="terminate"){
      data[i].taskState="终止";
      data[i].taskStatecolor="#FF5371"
    }*/
  }
}//委托流程
function escApproveResult(data) {
  for (var i in data){
    if(data[i].approveResult=="01"){
      data[i].approveResult="通过";
      data[i].approveResultcolor="#00DA3C"
    }
    if(data[i].approveResult=="02"){
      data[i].approveResult="退回";
      data[i].approveResultcolor="#FF5371"
    }
    if(data[i].approveResult=="--"){
      data[i].approveResultcolor="#000"
    }
  }
}//委托流程

function escReportSendWay(data){
  for (var i in data){
    if(data[i].sendType=="01"){
      data[i].sendType="自取"
    }
    if(data[i].sendType=="02"){
      data[i].sendType="邮寄"
    }
  }
}//报告

