// pages/subject/subject.js
Page({
  data:{
    types:[
      {
        name:"动作",
        img:"/assets/images/dongzuo.png"
      },
      {
        name: "喜剧",
        img: "/assets/images/xiju.png"
      },
      {
        name: "爱情",
        img: "/assets/images/aiqing.png"
      },
      {
        name: "科幻",
        img: "/assets/images/kehuan.png"
      },
      {
        name: "动画",
        img: "/assets/images/donghua.png"
      },
      {
        name: "惊悚",
        img: "/assets/images/jingsong.png"
      }
    ]
  },
  
  typeHandler(e){
    const name=e.currentTarget.dataset.type
    wx.navigateTo({
      url: '../subject-list/subject-list?type='+name,
    })
  }

})