
var app=getApp()
Page({
  data:{
    // text:"这是一个页面"
    array: ['解表药', '清热药', '泻下药', '祛风湿药','化湿药','利水渗湿药','温里药','理气药',
    '消食药','驱虫药','止血药','活血化瘀药','安神药','补虚药','开窍药','收涩药','涌吐药','平肝息风药','攻毒杀虫止痒药',
   '拔毒化腐生肌药','化痰止咳平喘药'],
    index: 0,
    mm:'CLASSES',
   
     expressNu:null,
    expressIn:1
  },
  
  bindPickerChange :function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    var thispage = this;
    // this.setData({
    //   Array:arr[index]
    // })
     console.log('picker发送选择改变，携带值为', this.data.MM)
   app.getExpressIn(this.data.array[e.detail.value],function(data){
        console.log(data)
        thispage.setData({expressIn:data})
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
  },
})