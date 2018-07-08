const activityUrl = require('../../../../../config').activityUrl

Page({
  title: 'Options',
  data: {
    groupId:null,
    history: []
  },
  onLoad: function (option) {
    console.log(option);
    this.setData({
      groupId: option.groupId
    });
    this.loadHistory();
  },
  loadHistory: function () {
    var app = getApp();
    console.log(app);
    var that = this;
    var tokenId = app.globalData.openId;
    console.log(tokenId);
    wx.request({
      url: activityUrl + "?tokenId=" + tokenId,
      method: 'POST',
      data: {
        'type': 'CHOOSE',
        'result1': that.data.groupId
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (response) {
        console.log(response);
        that.setData({ history: response.data });
      }
    });
  }
})
