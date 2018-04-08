// pages/user/user.js
Page({
  data:{
    headUrl:"",
    userName:"未知",
    movies:[]
  },

  onLoad(options){
    wx.getUserInfo({
      success:(res)=>{
        this.setData({
          headUrl:res.userInfo.avatarUrl,
          userName:res.userInfo.nickName
        })
      }
    })
  },

  onShow(){
    let history=wx.getStorageSync("history")
    if(history){
      this.setData({
        movies:history.slice(0,2)
      })
    }
  },

  gotoHistory(){
    wx.navigateTo({
      url: '../history-list/history-list',
    })
  },

  gotoShare(){
    wx.navigateTo({
      url: '../share/share',
    })
  },

  gotoDetail(e){
    const{movieData}=e.currentTarget.dataset
    const{_id}=movieData

    wx.navigateTo({
      url: '../movie-details/movie-details?id='+_id,
    })
  }
})