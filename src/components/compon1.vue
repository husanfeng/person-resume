<template>
  <div class="info">
    <h1>基本资料</h1>
    <transition :duration="{ enter: 2500, leave: 1500 }" enter-active-class="animated fadeInUp">
      <div class="cont" v-if="show">
        <img class="avatar" src="../../static/img/hsf.JPG" alt="">
        <h2>博学之,审问之,慎思之,明辨之,笃行之</h2>
        <p>我叫胡三丰</p>
        <p>3年移动端和前端经验</p>
        <div class="state">
          <el-row :gutter="30">
            <template v-for="item in states">
              <el-col :span="6" :xs="12" :key="item.icon">
                <div class="iconBox">
                  <i class="iconfont iconSet" :class="item.icon"></i>
                </div>
                <p v-text="item.val"></p>
              </el-col>
            </template>
          </el-row>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // bb: new Data(2014, 03, 19),
      show: false,
      states: [
        { icon: "icon-nianling", val: "年龄/26" },
        { icon: "icon-xueli", val: "学历/本科" },
        { icon: "icon-icon-", val: "坐标/北京" },
        { icon: "icon-zhiwei", val: "状态/找工作" }
      ]
    };
  },
  methods: {
    timeout() {
      setTimeout(() => {
        this.show = true;
      }, 1000);
    }
  },
  mounted() {
    this.timeout();
  },
  created() {
    // let a = this.f.prototype;
    // let b = Object.getPrototypeOf(this.f);
    // let c = Object.getPrototypeOf(new this.f());
    // let d = Function.prototype;
    // let e = this.aa.getDay();
    // let f = this.aa.getMonth();
    // var a = this.fun(0);
    // var aa = a.fun(1);
    // let ee = this.bb.getDay();
    // let ff = this.bb.getMonth();
    // var e = new Data("2014-03-09");
    // var f = new Data(2014, 03, 19);
    // var g = e.getDay();
    // var h = b.getDay();
    // var i = e.getMonth();
    // var j = b.getMonth();
    // console.log("打印---------------------------------------------------");
    // console.log(this.f.prototype === Object.getPrototypeOf(this.f));
  }
};
</script>

<style lang="less" scoped>
@import "../less/index.less";
.info {
  .info;
  .cont {
    .cont;
    margin: 20px auto;
    background-color: rgba(252, 247, 247, 0.3);
    border-radius: 25px;
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 60px;
      margin-top: 20px;
    }
    .state {
      padding: 20px 10px 50px;
      .iconBox {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        border: 1px solid rgba(9, 92, 49, 0.5);
        margin: 5px auto;
        background-color: rgba(13, 73, 87, 0.4);
        &:hover {
          background-color: rgba(13, 73, 87, 0.8);
        }
        .iconSet {
          font-size: 3rem;
          line-height: 80px;
          color: rgba(220, 228, 220, 0.7);
          &:hover {
            font-size: 3.5rem;
            color: rgba(220, 228, 220, 1);
          }
        }
      }
    }
  }
}
</style>
