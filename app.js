//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
//name
 getExpressInfo:function(nu,cb){
   wx.request({
      //原来的的URL url: 'http://apis.baidu.com/kuaidicom/express_api/express_api?muti=0&order=desc&nu='+nu,
      url:'https://api.bmob.cn/1/classes/DRUG',
      method: 'GET',
      data: {
       
        where:{"NAME":nu}

      },
      header: {
        //原来的API  'apikey': '2e24c33be1e7f7dafebc496c07441138'
         // 'appid':'',
          //'apikey':'2459edb25aa1082e817d8971e0dd1707'
          'X-Bmob-Application-Id': 'c8f1f85f613262f2ae811c87206ada61',
          'X-Bmob-REST-API-Key':'2459edb25aa1082e817d8971e0dd1707',
          //'where={"NAME":{"$gte":1000,"$lte":3000}}':'',
          'Content-Type': 'application/json',
          
      },
      success: function(res) {
       // console.log(res.data)
       cb(res.data)
      }
    })

 },




//CLASSES
getExpressIn:function(nu,cb){
   wx.request({
      //原来的的URL url: 'http://apis.baidu.com/kuaidicom/express_api/express_api?muti=0&order=desc&nu='+nu,
      url:'https://api.bmob.cn/1/classes/DRUG',
      method: 'GET',
      data: {
       
        where:{"CLASSES":nu}
       

      },
       
      header: {
        
          'X-Bmob-Application-Id': 'c8f1f85f613262f2ae811c87206ada61',
          'X-Bmob-REST-API-Key':'2459edb25aa1082e817d8971e0dd1707',
          'Content-Type': 'application/json',
          
      },
      
      success: function(res) {
       // console.log(res.data)
       cb(res.data)
      }
    })

 },


//FLAVOR_MERIDIAN
 getExpressInF:function(nu,cb){
   wx.request({
      //原来的的URL url: 'http://apis.baidu.com/kuaidicom/express_api/express_api?muti=0&order=desc&nu='+nu,
      url:'https://api.bmob.cn/1/classes/DRUG',
      method: 'GET',
      data: {
       
        where:{"FLAVOR_MERIDIAN":nu}
       

      },
       
      header: {
        
          'X-Bmob-Application-Id': 'c8f1f85f613262f2ae811c87206ada61',
          'X-Bmob-REST-API-Key':'2459edb25aa1082e817d8971e0dd1707',
          'Content-Type': 'application/json',
          
      },
      
      success: function(res) {
       // console.log(res.data)
       cb(res.data)
      }
    })

 },


  globalData:{
    userInfo:null
  }
})