Page({
  data:{
    movie:{},
    time:""
  },
  onLoad(options){
    // console.log(options)
    const id=options.id

    wx.showLoading({
      title: '',
    })

    wx.request({
      url: `https://db.miaov.com/doubanapi/v0/movie/detail/${id}`,
      success:(res)=>{
        const movie=res.data.data
        this.setData({
          movie
        })

        wx.hideLoading()
      }
    })
  }
})