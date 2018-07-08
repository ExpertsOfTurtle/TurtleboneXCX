const choiceSummaryUrl = require('../../../../../config').choiceSummaryUrl
const choiceDeleteUrl = require('../../../../../config').choiceDeleteUrl
const choiceRandomUrl = require('../../../../../config').choiceRandomUrl
Page({
  title: 'Options',
  data:{
    optionsList: [],
    choiceResult:null
  },
  onLoad:function() {
    console.log("Onload");
    this.loadChoiceSummary();
  },
  loadChoiceSummary: function() {
    var app = getApp();
    console.log(app);
    var that = this;
    var tokenId = app.globalData.openId;
    console.log(tokenId);
    wx.request({
      url: choiceSummaryUrl + "?tokenId=" + tokenId,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (response) {
        console.log(response);
        that.setData({ optionsList: response.data });
      }
    });
  },
  deleteChoice: function (groupId) {
    var app = getApp();
    console.log(app);
    var that = this;
    var tokenId = app.globalData.openId;
    console.log(tokenId);
    wx.request({
      url: choiceDeleteUrl + "/" + groupId + "?tokenId=" + tokenId,
      method: 'DELETE',
      header: {
        'content-type': 'application/json'
      },
      success: function (response) {
        that.loadChoiceSummary();
      }
    });
  },
  doChoice: function(e) {
    console.log(e);
    var that = this;
    var app = getApp();
    var target = e.currentTarget;
    var groupId = target.dataset.id;
    var tokenId = app.globalData.openId;
    console.log(groupId);
    wx.request({
      url: choiceRandomUrl + "/" + groupId + "?tokenId=" + tokenId,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (response) {
        console.log(response);
        that.setData({ choiceResult: response.data });
      }
    });
  },
  editOption:function(e){
    var that = this;
    var app = getApp();
    var target = e.currentTarget;
    var groupId = target.dataset.id;
    console.log(groupId);
    wx.navigateTo({
      url: '../create/create?groupId=' + groupId
    })
  },
  queryHistory: function (e) {
    var that = this;
    var app = getApp();
    var target = e.currentTarget;
    var groupId = target.dataset.id;
    console.log(groupId);
    wx.navigateTo({
      url: '../history/history?groupId=' + groupId
    })
  }
})
