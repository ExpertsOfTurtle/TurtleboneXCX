
Page({
  
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
  }, kindToggle: function (e) {
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
  }
})
