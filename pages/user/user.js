// pages/user/user.js
Page({
  data:{
    headUrl:"",
    userName:"未知"
  },

  onLoad(){
    wx.getUserInfo({
      success:(res)=>{
        this.setData({
          headUrl:res.userInfo.avatarUrl,
          userName:res.userInfo.nickName
        })
      }
    })
  }
})