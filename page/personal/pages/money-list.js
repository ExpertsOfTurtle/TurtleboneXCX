// page/personal/pages/money-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    list: [
      {
        id: '1',
        month: '2018.06',
        open: false,
        sum: 20,
        detail: [
          {
            day: '2018.06.01',
            num: '30'
          }, {
            day: '2018.06.02',
            num: '30'
          }, {
            day: '2018.06.03',
            num: '30'
          }, {
            day: '2018.06.25',
            num: '30'
          }, {
            day: '2018.06.30',
            num: '30'
          }
        ]
      }, {
        id: 'page',
        month: '2018.07',
        open: false,
        sum: 20,
        detail: [
          {
            day: '2018.07.10',
            num: '30'
          }, {
            day: '2018.07.20',
            num: '30'
          }, {
            day: '2018.07.30',
            num: '30'
          }, {
            day: '2018.07.31',
            num: '30'
          }
        ]
      }, {
        id: 'page1',
        month: '2018.08',
        open: false,
        sum: 20,
        detail: [
          {
            day: '2018.08.10',
            num: '30'
          }, {
            day: '2018.08.20',
            num: '30'
          }, {
            day: '2018.08.30',
            num: '30'
          }, {
            day: '2018.08.31',
            num: '30'
          }
        ]
      }
    ],
  
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        if (list[i].url) {
          wx.navigateTo({
            url: 'pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})