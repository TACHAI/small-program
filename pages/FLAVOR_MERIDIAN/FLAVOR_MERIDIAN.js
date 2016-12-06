var app=getApp()
//不支持模糊查询，不能用
Page({
  data:{
     array: ['寒','热','温','凉','辛','甘','酸','苦','咸'],
      index: 0,
     expressNu:null,
    expressInF:null
  },
   bindPickerChange :function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    var thispage = this;
     console.log('picker发送选择改变，携带值为', this.data.MM)
    app.getExpressInF(this.data.array[e.detail.value],function(data){
        console.log(data)
        thispage.setData({expressInF:data})
    });
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})