// pages/index/Order.js
Page({
  data: {
    num: 1
  },
  changeOil: function (e) {
    this.setData({
      num: e.target.dataset.num
    })
  }
})