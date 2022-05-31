# 吉林大学快捷评教脚本

该脚本适用于吉林大学 **2021-2022 学年春季学期期末**在线教学质量评价，由[双草酸酯](https://0x.mk)[创作](https://0x.mk/?p=166)，现由 [TechCiel](https://ciel.dev) 维护。

以 [MIT License](LICENSE) 开源，再利用须保留 LICENSE 文件。

## 使用方法

复制下方代码后，用电脑版 Chrome 浏览器打开某门课程的评价页面，按下 F12 选择 Console 后，粘贴在下方输入区并回车，然后即可提交完成该科目评教。

## 免责声明

本程序以你所见到的样子呈现给你，不附带任何明示或暗示的担保。在运行之前，你有责任理解其源代码的工作原理，并确认这是你想要执行的，本程序进行的操作都应被视为你本人进行。在任何情况下，本程序作者与你决定运行本程序无关，不为你运行此程序所造成的任何损失、受到的处罚以及造成的法律后果等负任何责任。

## Code!

<a id="copy" class="btn" onclick="navigator.clipboard.writeText(document.getElementsByTagName('code')[0].innerText)">点此复制</a>

<style>code { word-break: break-all !important; white-space: pre-wrap !important; }</style>

```js
var list=["p01","p02","p03","p04","p05","p06","p07","p08","p09","p10","sat11","sat12","sat13","judge01"];var ans=["A","A","A","A","A","A","A","A","A","A","A","A","A","Y"];function genNewTime(){var newTime=lastTime+Math.floor((Math.random()*1.5+1.5)*1000);lastTime=newTime;return newTime;}ntms.widget._AutoTimer.prototype._static.setInterval(0);var lastTime=new Date().getTime()-60000;var clicks={"_boot_":lastTime};for(var i=0;i<list.length;i++){$("input[name='"+list[i]+"'][value='"+ans[i]+"']").click();clicks[list[i]]=genNewTime();}ntms.widget._AutoTimer.prototype._static.clicks=clicks;function xhrWrapper(payload,cb){dojo.xhrPost({url:"/ntms/service/res.do",handleAs:"json-comment-optional",headers:[],contentType:"application/json",load:function(data){cb(data)},sync:true,postData:dojo.toJson(payload),});}function setUID(result){uid=result.userId;var payload={"tag":"student_sch_dept","branch":"default","params":{"schId":result.defRes.school,"deptId":result.defRes.department,"egrade":null,"adcId":result.defRes.adcId}};xhrWrapper(payload,searchName);}function searchName(result){result.value.forEach(function (i){nameList.push(i.name)});console.log(nameList);var pattern1=$("#puzzle_1").innerHTML;var pattern2=$("#puzzle_2").innerHTML;var pattern="^"+pattern1+"(.)"+pattern2+"$";var regex=new RegExp(pattern);nameList.forEach(function (i){var res=regex.exec(i);if(res!=null){console.log(res);document.getElementById("dijit_form_TextBox_0").value=res[1];}})}var nameList=[];var uid;dojo.xhrPost({url:"/ntms/action/getCurrentUserInfo.do",handleAs:"json-comment-optional",load:function(data){setUID(data)},sync:true});
```
