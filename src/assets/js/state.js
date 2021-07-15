export{
	state,accountState,isExist,isSuccess,//账号
	disposeMode,reportType,reportFormat,entrustState,entrustSource,testState,
	disposeModes,reportTypes,reportFormats,reportSendTypes,entrustStates,entrustSources,testStates,testTypes,
	companyStatus,sendModes,standardTypes,skinState1,sceneTest1
}

function companyStatus(data){
	if(data.companyStatu=="01"){
			 data.companyStatu="正常"
	}
	if(data.companyStatu=="02"){
			 data.companyStatu="带审核"
	}
	if(data.companyStatu=="03"){
				data.companyStatu="审核未通过"
	   }
	if(data.companyStatu=="04"){
			data.companyStatu="冻结"
	}
 }
function testStates(data){
	for (var i in data){
	if(data[i].testState=="待检"){
			 data[i].testState="01"
	}
	if(data[i].testState=="在检"){
			 data[i].testState="02"
	}
	if(data[i].testState=="已检"){
			data[i].testState="03"
	   }
	if(data[i].testState=="暂停"){
			data[i].testState="04"
	}
	if(data[i].testState=="取消"){
				data[i].testState="05"
	}
}
 }
function entrustSources(data){
	if(data.state=="外部"){
			 data.state="01"
	}
	if(data.state=="内部"){
			 data.state="02"
	}
 }
function entrustStates(data){
	for (var i in data){
	if(data[i].entrustState=="待检测方确认"){
			 data[i].entrustState="01"
	}
	if(data[i].entrustState=="待委托方确认"){
			 data[i].entrustState="02"
	}
	if(data[i].entrustState=="待检"){
				data[i].entrustState="03"
	   }
	if(data[i].entrustState=="在检"){
			data[i].entrustState="04"
	}
	if(data[i].entrustState=="已检"){
				data[i].entrustState="05"
	}
	if(data[i].entrustState=="取消"){
				data[i].entrustState="06"
	}
	if(data[i].entrustState=="退回"){
				data[i].entrustState="07"
	}
}
 }
function reportSendTypes(data){
	if(data.reportSendType=="电子邮件送达"){
			 data.reportSendType="01"
	}
	if(data.reportSendType=="委托人自取"){
		 data.reportSendType="02"
	}
	if(data.reportSendType=="快递或邮寄"){
		data.reportSendType="03"
	   }
	   if(data.reportSendType=="其他"){
		data.reportSendType="04"
	   }
 }
function reportFormats(data){
	if(data.reportFormat=="中文版"){
			 data.reportFormat="01"
	}
	if(data.reportFormat=="英文版"){
			 data.reportFormat="02"
	}
	if(data.reportFormat=="扫描电子档"){
				data.reportFormat="03"
	   }
 }
function reportTypes(data){
	if(data.reportType=="检验报告"){
			 data.reportType="01"
	}
	if(data.reportType=="检测报告"){
			 data.reportType="02"
	}
	if(data.reportType=="检定/校准证书"){
		data.reportType="03"
	   }
	if(data.reportType=="测试报告"){
			data.reportType="04"
	}
	if(data.reportType=="不需要报告"){
			data.reportType="99"
	}
 }
function disposeModes(data){
	if(data.disposeMode=="委托方自提"){
	 data.disposeMode="01"
	}
	if(data.disposeMode=="受托方自行处置"){
	  data.disposeMode="02"
	}
	if(data.disposeMode=="其他"){
		data.disposeMode="03"
	   }
 }
function sendModes(data){
	if(data.sendMode=="送样"){
	 data.sendMode="01"
	}
	if(data.sendMode=="抽样"){
	  data.sendMode="02"
	}
	if(data.sendMode=="邮寄"){
		data.sendMode="03"
	}
	// if(data.sendMode=="现场"){
	// 	data.sendMode="04"
	// }
 }
 function testTypes(data){
	if(data.testType=="型式试验"){
	 data.testType="10"
	}
	if(data.testType=="委托检验/检测"){
	  data.testType="11"
	}
	if(data.testType=="抽样检验/检测"){
		data.testType="12"
	}
	if(data.testType=="委托检定"){
		data.testType="13"
	}
	if(data.testType=="委托校准"){
		data.testType="14"
	}
	if(data.testType=="其他"){
		data.testType="15"
	}
 }
function standardTypes(data){
	if(data.standardType=="国家标准"){
	 data.standardType="01"
	}
	if(data.standardType=="检定规程"){
	  data.standardType="02"
	}
	if(data.standardType=="型式评价大纲"){
		data.standardType="03"
	}
	if(data.standardType=="校准规程"){
		data.standardType="04"
	}
	if(data.standardType=="行业大纲"){
		data.standardType="04"
	}
	if(data.standardType=="企业标准"){
		data.standardType="04"
	}
	if(data.standardType=="国际标准"){
		data.standardType="04"
	}
	if(data.standardType=="其他"){
		data.standardType="04"
	}
 }
function skinState1(data){
	console.log(data);
	if(data.skinState=="完好"){
	 data.skinState="01"
	}
	if(data.skinState=="其他"){
	  data.skinState="02"
	}
 }
function sceneTest1(data){
	console.log(data);
	if(data.sceneTest=="否"){
	 data.sceneTest="01"
	}
	if(data.sceneTest=="是"){
	  data.sceneTest="02"
	}
 }




function testState(data){
	for (var i in data){
	if(data[i].testState=="01"){
			 data[i].testState="待检"
	}
	if(data[i].testState=="02"){
			 data[i].testState="在检"
	}
	if(data[i].testState=="03"){
				data[i].testState="已检"
	   }
	if(data[i].testState=="04"){
			data[i].testState="暂停"
	}
	if(data[i].testState=="05"){
				data[i].testState="取消"
	}
}
 }
function entrustSource(data){
	if(data.state=="01"){
	 data.state="外部"
	}
	if(data.state=="02"){
	 data.state="内部"
	}
 }
function entrustState(data){
	for (var i in data){
		if(data[i].entrustState=="01"){
		  data[i].entrustState="待检测方确认"
		  data[i].color="#FF5371"
		}
		if(data[i].entrustState=="02"){
			data[i].entrustState="待我确认"
			data[i].color="#FF5371"
		  }
		  if(data[i].entrustState=="03"){
			data[i].entrustState="待检"
			data[i].color="#FF5371"
		  }
		if(data[i].entrustState=="04"){
		  data[i].entrustState="在检"
		  data[i].color="#FEBF00"
		}
		if(data[i].entrustState=="05"){
		  data[i].entrustState="已检"
		  data[i].color="#00AF4F"
		}
		if(data[i].entrustState=="06"){
			data[i].entrustState="取消"
			data[i].color="#9e9e9e"
		  }
		  if(data[i].entrustState=="07"){
			data[i].entrustState="退回"
			data[i].color="#FF5371"
		  }
	  }
// 	for (let i = 0; i < data.length; i++) {
// 		if(data[i].entrustState="01"){
// 			data[i].entrustState="待检测机构确认"
// 			
//    }else if(data[i].entrustState="02"){
// 	data[i].entrustState="待委托方确认"
// 	
//    }
//    if(data[i].entrustState="03"){
// 			   data[i].entrustState="待检"
// 	  }
		
// 	}
// 	for (var i in data){
// 	if(data[i].entrustState="01"){
// 			 data[i].entrustState="待检测机构确认"
// 	}
// 	if(data[i].entrustState="02"){
// 			 data[i].entrustState="待委托方确认"
// 	}
// 	if(data[i].entrustState="03"){
// 				data[i].entrustState="待检"
// 	   }
// 	if(data[i].entrustState="04"){
// 			data[i].entrustState="在检"
// 	}
// 	if(data[i].entrustState="05"){
// 			data[i].entrustState="已检"
// 	}
// 	if(data[i].entrustState="06"){
// 			data[i].entrustState="取消"
// 	}
// 	if(data[i].entrustState="07"){
// 			data[i].entrustState="退回"
// 	}
// }
 }
// function reportSendTypes(data){
// 	if(data.reportSendType=="电子邮件送达"){
// 		 data.reportSendType="01"
// 	}
// 	if(data.reportSendType=="委托人自取"){
// 		 data.reportSendType="02"
// 	}
// 	if(data.reportSendType=="快递或邮寄"){
// 			data.reportSendType="03"
// 	   }
// 	if(data.reportSendType=="其他"){
// 			data.reportSendType="04"
// 	   }
//  }
function reportFormat(data){
	if(data.reportFormat=="01"){
		data.reportFormat="中文版"
	}
	if(data.reportFormat=="02"){
		data.reportFormat="英文版"
	}
	if(data.reportFormat=="03"){
			data.reportFormat="扫描电子档"
	   }
 }
function reportType(data){
	if(data.reportType=="01"){
		 data.reportType="检验报告"
	}
	if(data.reportType=="02"){
		 data.reportType="检测报告"
	}
	if(data.reportType=="03"){
			data.reportType="检定/校准证书"
	   }
	if(data.reportType=="04"){
		 data.reportType="测试报告"
	}
	if(data.reportType=="99"){
			data.reportType="不需要报告"
	}
 }
function disposeMode(data){
	if(data.disposeMode=="01"){
	 data.disposeMode="自取"
	}
	if(data.disposeMode=="02"){
		 data.disposeMode="自愿放弃"
	}
	if(data.disposeMode=="03"){
			data.disposeMode="检测机构代办托运"
	   }
 }







function state(data){
   if(data.state=="0"){
	data.state="有效"
   }
   if(data.state=="1"){
		data.state="作废"
   }
}
function accountState(data){
	if(data.accountState=="01"){
		data.accountState="正常"
	}
	if(data.accountState=="02"){
		data.accountState="冻结"
	}
 }
 function isExist(data){
	if(data.isExist=="true"){
		data.isExist="存在"
	}
	if(data.isExist=="false"){
		data.isExist="不存在"
	}
 }
 function isSuccess(data){
	if(data.isSuccess=="true"){
		data.isSuccess="验证通过"
	}
	if(data.isSuccess=="false"){
		data.isSuccess="验证不通过"
	}
 }