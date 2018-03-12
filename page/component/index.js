const loginUrl = require('../../config').loginUrl

Page({
  data: {
    openId:'',
    list: [
      {
        id: 'cf',
        name: 'CF',
        category: 'cf',
        open: false,
        pages: [{
          'name': 'insert',
          'label': 'Insert'
        }, {
          'name': 'list',
          'label': 'Show all'
        }]
      },
      {
        id: 'choice',
        name: 'Choice',
        category: 'choice',
        open: false,
        pages: [{
          'name': 'list',
          'label': 'List all'
        }, {
          'name': 'create',
          'label': 'Create'
        }]
      },{
        id: 'view',
        name: '视图容器',
        open: false,
        pages: [{
          'name':'view', 
          'label': 'view'
        }, {
           'name': 'scroll-view',
          'label': 'scroll-view'
        }, {
           'name': 'swiper',
           'label': 'swiper'
        }]
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: [{
          'name': 'text',
          'label': 'text'
        }, {
            'name': 'icon',
            'label': 'icon'
          }, {
            'name': 'progress',
            'label': 'progress'
          }]
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: [{
          'name': 'text',
          'label': 'text'
        },{
          'name': 'button',
          'label': 'button'
        }, {
            'name': 'checkbox',
            'label': 'checkbox'
          }, {
            'name': 'form',
            'label': 'form'
        }, {
            'name': 'input',
            'label': 'input'
          }, {
            'name': 'label',
            'label': 'label'
        }, {
            'name': 'picker',
            'label': 'picker'
          }, {
            'name': 'radio',
            'label': 'radio'
        }, {
            'name': 'slider',
            'label': 'slider'
          }, {
            'name': 'switch',
            'label': 'switch'
        }, {
            'name': 'textarea',
            'label': 'textarea'
          }]
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: [{
          'name': 'navigator',
          'label': 'navigator'
        }]
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: [{
          'name': 'image',
          'label': 'image'
        }, {
            'name': 'audio',
            'label': 'audio'
          }, {
            'name': 'video',
            'label': 'video'
          }]
      }, {
        id: 'map',
        name: '地图',
        pages: [{
          'name': 'map',
          'label': 'map'
        }]
      }, {
        id: 'canvas',
        name: '画布',
        pages: [{
          'name': 'canvas',
          'label': 'canvas画布'
        }]
      }
    ]
  },
  onLoad: function () {
    this.login();
  },
  login: function (e) {
    var that = this;
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
                  that.setData({ openId: getOpenIdRes.data.openid });
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

