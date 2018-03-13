//index.js
//获取应用实例
Page({
  data: {
    movies:[],
    page:1,
    size:6
  },

  onLoad(){
    this.loadMovies()
  }
  
  loadMovies(){
    const{size,page}=this.date
    wx.request({
      url: 'https:db.miaov.com/doubanapi/movies/info?page=${page}&size=${size}',
    })
  }
})