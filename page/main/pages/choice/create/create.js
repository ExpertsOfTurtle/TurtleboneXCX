const choiceCreateUrl = require('../../../../../config').choiceCreateUrl
const choiceUpdateUrl = require('../../../../../config').choiceUpdateUrl
const choiceDetailUrl = require('../../../../../config').choiceSummaryUrl
const choiceDeleteUrl = require('../../../../../config').choiceDeleteUrl

Page({
  title: 'Options',
  action : 'Create',//Create/Edit
  groupId: null,//for edit
  data:{
    optionsList: [{}]
  },
  onLoad: function (option) {
    var groupId = option.groupId;
    console.log("onLoad, groupId=", groupId);
    if (groupId != null) {
      this.setData({ groupId: groupId});
      this.loadChoice();
    }
  },
  addOption:function() {
    var optionsList = this.data.optionsList;
    optionsList.push({});
    this.setData({ optionsList: optionsList});
  },
  update:function() {
    var optionsList = this.data.optionsList;
    var that = this;
    var param = {
      group: {
        groupname:that.data.groupName,
        groupid:that.data.groupId
      },
      options: that.data.optionsList
    }
    console.log(param);
    if (that.data.groupId == null) {
      this.sendCreateRequest(param);
    } else {
      this.sendUpdateRequest(param);
    }
  },
  deleteOption: function(e) {
    var idx = e.currentTarget.dataset.index;
    var optionsList = this.data.optionsList;
    optionsList.splice(idx, 1);
    this.setData({ optionsList: optionsList });
  },
  groupNameInput: function (e) {
    var groupName = e.detail.value;
    this.setData({ groupName: groupName});
  },
  nameInput:function(e) {
    var idx = e.currentTarget.dataset.index;
    var optionsList = this.data.optionsList;
    optionsList[idx].optionname = e.detail.value;
    this.setData({ optionsList : optionsList});
  },
  probabilityInput:function(e) {
    var idx = e.currentTarget.dataset.index;
    var optionsList = this.data.optionsList;
    optionsList[idx].probability = e.detail.value;
    this.setData({ optionsList: optionsList });
  },
  sendUpdateRequest: function (data) {
    var app = getApp();
    var that = this;
    var tokenId = app.globalData.openId;
    console.log(tokenId);
    wx.request({
      url: choiceUpdateUrl + "?tokenId=" + tokenId,
      method: 'PUT',
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: function (response) {
        console.log(response);
        wx.navigateBack({//返回
          delta: 1
        })
      }
    });
  },
  sendCreateRequest: function (data) {
    var app = getApp();
    var that = this;
    var tokenId = app.globalData.openId;
    console.log(tokenId);
    wx.request({
      url: choiceCreateUrl + "?tokenId=" + tokenId,
      method: 'POST',
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: function (response) {
        console.log(response);
        wx.navigateBack({//返回
          delta: 1
        })
      }
    });
  },
  deleteChoice: function (groupId) {
    var app = getApp();
    console.log(app);
    var that = this;
    var tokenId = app.globalData.openId;
    console.log(tokenId);
    console.log(that.data.groupId);
    wx.request({
      url: choiceDeleteUrl + "/" + that.data.groupId + "?tokenId=" + tokenId,
      method: 'DELETE',
      header: {
        'content-type': 'application/json'
      },
      success: function (response) {
        console.log(response);
        wx.navigateBack({//返回
          delta: 1
        })
      }
    });
  }, 
  loadChoice: function () {
    var app = getApp();
    var that = this;
    var tokenId = app.globalData.openId;
    console.log(tokenId);
    wx.request({
      url: choiceDetailUrl + "/" + that.data.groupId + "?tokenId=" + tokenId,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (response) {
        console.log(response);
        that.setData({ groupName: response.data.group.groupname });
        that.setData({ groupId: response.data.group.groupid });
        that.setData({ optionsList: response.data.options });
      }
    });
    }
})
