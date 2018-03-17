// pages/subject/subject.js
Page({
  data:{
    name:"",
    chineseScore:"",
    mathScore:"",
    avg:"",
    flag:true
  },
  input1(e){
    var input=e.detail.value;
    this.setData({
      name:input
    });
  },
  input2(e) {
    var input = e.detail.value;
    if(!isNaN(input)){
      this.setData({
        chineseScore:input
      })
    }
  },
  input3(e) {
    var input = e.detail.value;
    if (!isNaN(input)) {
      this.setData({
        mathScore: input
      })
    }
  },
  test(){
    if(this.data.name==""||this.data.chineseScore==""||this.data.mathScore==""){
      return;
    }
    var result=(this.data.chineseScore*1+this.data.mathScore*1)/2;
    this.setData({
      avg:result,
      flag:false
    });
  }
})