/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

var host = "turtlebone.top"
//var host = "localhost"

var config = {

    // 下面的地址配合云端 Server 工作
    host,

    // 登录地址，用于建立会话
    loginUrl: `https://${host}/auth/wechat/getOpenId`,

    // 查询选择组的列表
    choiceSummaryUrl: `https://${host}/choice/choose/query`,
    choiceRandomUrl: `https://${host}/choice/choose/random`,
    choiceCreateUrl: `https://${host}/choice/choose/create`,
    choiceUpdateUrl: `https://${host}/choice/choose/update`,
    choiceDeleteUrl: `https://${host}/choice/choose/delete`,
    activityUrl: `https://${host}/choice/activity/query`
};

module.exports = config
