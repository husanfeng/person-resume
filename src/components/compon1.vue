<template>
    <div class="info">
        <h1>基本资料</h1>
        <transition :duration="{ enter: 2500, leave: 1500 }" enter-active-class="animated fadeInUp">
            <div class="cont" v-if="show">
                <img class="avatar" src="https://github.com/husanfeng/person-resume/blob/master/static/img/hsf.JPG?raw=true" alt="">
                <h2>优秀的判断来自经验,但经验来自错误的判断</h2>
                <h4>我叫胡三丰</h4>
                <h4>3年移动端和前端经验</h4>
                <div class="state">
                    <el-row :gutter="30">
                        <template v-for="item in states">
                            <div>
                                <el-col :span="6" :xs="12" :key="item.icon">
                                    <div class="iconBox">
                                        <i class="iconfont iconSet" :class="item.icon" @mouseover="showMore(item.id)" @mouseout="outHide(item.id)"></i>
                                    </div>
                                    <h4 v-text="item.val"></h4>
                                </el-col>
                            </div>
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
        {
          id: "0",
          itemDes: "我出生于1993年，还是it界的小学生",
          isShow: false,
          icon: "icon-nianling",
          val: "年龄/26"
        },
        {
          id: "1",
          itemDes: "我出生于1993年，还是it界的小学生",
          isShow: false,
          icon: "icon-xueli",
          val: "学历/本科"
        },
        {
          id: "2",
          itemDes: "我出生于1993年，还是it界的小学生",
          isShow: false,
          icon: "icon-icon-",
          val: "坐标/北京"
        },
        {
          id: "3",
          itemDes: "我出生于1993年，还是it界的小学生",
          isShow: false,
          icon: "icon-zhiwei",
          val: "状态/找工作"
        }
      ]
    };
  },
  methods: {
    showMore(id) {
      debugger;
      console.log(id);
      // this.states[id].isShow = true;
      this.$message({
        dangerouslyUseHTMLString: true,
        message: this.states[id].val
      });
    },
    outHide(id) {
      // this.states[id].isShow = false;
    },
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
      padding: 20px 10px 30px;
      .iconBox {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        border: 1px solid rgba(9, 92, 49, 0.5);
        margin: 5px auto;
        overflow: visible;
        // background-color: rgba(13, 73, 87, 0.4);
        background-color: rgba(13, 73, 87, 0.8);
        // &:hover {
        //   background-color: rgba(13, 73, 87, 0.8);
        // }
        // .box-shadow-show {
        //   width: 100px;
        //   height: 100px;

        //   box-shadow: 0px -80px 0 #c4c4e9;
        // }
        .iconSet {
          font-size: 3rem;
          line-height: 80px;
          color: rgba(220, 228, 220, 0.7);
          &:hover {
            font-size: 4rem;
            color: rgba(220, 228, 220, 1);
          }
        }
      }
    }
  }
}
</style>
