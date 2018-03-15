//index.js
//获取应用实例
Page({
  data: {
    movies:[],
    page:1,
    size:6,
    loading:true
  },

  //生命周期函数--页面加载时执行
  onLoad(){
    this.loadMovies()
  },
  
  //加载电影数据
  loadMovies(){
    const{size,page}=this.data

    this.setData({loading:true})

    //发起网络请求
    wx.request({
      url: 'https://db.miaov.com/doubanapi/movies/info?page=${page}&size=${size}',
      success:(res)=>{
        console.log(res)
        const{data}=res.data //这里用到了ES6的解构赋值
        const movies=this.data.movies

        for(let i=0;i<data.length;i+=2){
          movies.push([data[i],data[i+1]?data[i+1]:null])
        }
        this.setData({movies,loading:false})
      }
    })
  }
})