const loginUrl = require('../../config').loginUrl

Page({
  data: {
    openId:null,
    loginName:"",
    list: [
      {
        id: 'choice',
        name: '命运',
        category: 'choice',
        open: false,
        needAuth:false,
        url: 'pages/choice/list/list'
      },
      {
        id: 'cf',
        name: 'CF',
        category: 'cf',
        open: false,
        needAuth: true,
        pages: [{
          'name': 'insert',
          'label': 'Insert'
        }, {
          'name': 'list',
          'label': 'Show all'
        }]
      }
    ]
  },
  onLoad: function () {
    this.login();
  },
  login: function (e) {
    var that = this;
    var app = getApp();
    wx.login({
      success: function (res) {
        console.log("login:" + res.code);
        console.log(res);
        if (res.code) {
          wx.getUserInfo({
            success: function (res_user) {
              console.log("getUserInfo");
              console.log(res_user);
              var reqBody = {
                code: res.code,
                nickName: res_user.userInfo.nickName,
                avatarUrl: res_user.userInfo.avatarUrl
              };
              that.setData({ nickName: res_user.userInfo.nickName });
              wx.request({
                url: loginUrl,
                method: 'POST',
                data: reqBody,
                header: {
                  'content-type': 'application/json'
                },
                success: function (getOpenIdRes) {
                  console.log("get Result:");
                  console.log(getOpenIdRes);
                  that.setData({ openId: getOpenIdRes.data.tokenId });
                  that.setData({ loginName: getOpenIdRes.data.loginName });
                  that.setData({ avatarUrl: getOpenIdRes.data.avatarUrl });
                  app.globalData.openId = getOpenIdRes.data.tokenId;
                  console.log("openid:"+app.globalData.openId);
                }
              })
            }
          });
        }
      }
    });
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
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

