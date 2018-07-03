//index.js
//获取应用实例

Page({
  data: {
    imgUrls: [
      '../../img/swiper.png',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    iconSize: [30],
    iconColor: [
       'green',
    ],
    iconType: [
      'success'
    ]
  },
  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function () {
        console.log("成功拨打电话")
      }
    })
  }
})
wx.getLocation({
  type: 'wgs84',
  success: function (res) {
    var latitude = res.latitude
    var longitude = res.longitude
    var speed = res.speed
    var accuracy = res.accuracy
  }
})