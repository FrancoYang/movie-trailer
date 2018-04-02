//index.js
//获取应用实例
Page({
  data: {
    movies:[],
    page:1,
    size:6,
    // 从第1页开始每次显示6条电影信息
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
      url: `https://db.miaov.com/doubanapi/v0/movie/list?page=${page}&size=${size}`,
      //注意上面url后的网址是用的反引号`（来自ES6的模板字符串）而不是普通的引号
      success:(res)=>{
        const{data}=res.data 
        //这里用到了ES6的解构赋值
        const movies=this.data.movies

        for(let i=0;i<data.length;i+=2){
          movies.push([data[i],data[i+1]?data[i+1]:null])
        }
        this.setData({movies,loading:false})
        //网络请求完成后是loading消失，到要再次请求的时候再显示
      }
    })
  },
  
  //当页面拉到最底下时，加载更多的条目
  scrollHandler(){
    const{page}=this.data
    this.setData({
      page:page+1
    })
    this.loadMovies()
  },

  gotoDetailHandler(e){
    const{id}=e.currentTarget.dataset
    wx.navigateTo({
      url:'../movie-details/movie-details?id='+id,
      
    })
  }
})