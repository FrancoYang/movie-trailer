// pages/subject-list/subject-list.js

Page({
  data: {
    movies: [],
    page: 1,
    size: 6,
    // 从第1页开始每次显示6条电影信息
    loading: true,
    type:""
  },

  //生命周期函数--页面加载时执行
  onLoad(options) {
    const{type}=options
    this.setData({type})
    this.loadMovies()
  },

  //存储观看记录

  saveData(data){
    let history=wx.getStorageSync("history")||[]
    history=history.filter((item)=>{
      return item._id!==data._id
    })
    history.unshift(data)
    wx.setStorageSync("history",history)
  },

  //加载电影数据
  loadMovies() {
    const { size, page, type } = this.data

    this.setData({ loading: true })

    wx.showLoading({
      title:"",
      mask:true
    })

    //发起网络请求
    wx.request({
      url: `https://db.miaov.com/doubanapi/v0/movie/list?type=${type}&page=${page}&size=${size}`,
      //注意上面url后的网址是用的反引号`（来自ES6的模板字符串）而不是普通的引号
      success: (res) => {
        const { data } = res.data
        //这里用到了ES6的解构赋值
        const movies = this.data.movies||[]

        for (let i = 0; i < data.length; i += 2) {
          movies.push([data[i],data[i + 1] ? data[i + 1] : null])
        }
        this.setData({ movies, loading: false })
        //网络请求完成后是loading消失，到要再次请求的时候再显示
        wx.hideLoading()
      }
    })
  },

  //当页面拉到最底下时，加载更多的条目
  scrollHandler() {
    const { page } = this.data
    this.setData({
      page: page + 1
    })
    this.loadMovies()
  },

  gotoDetailHandler(e) {
    const { movieData } = e.currentTarget.dataset
    const{_id}=movieData
    this.saveData(movieData)
    wx.navigateTo({
      url: '../movie-details/movie-details?id=' + _id,

    })
  }
})