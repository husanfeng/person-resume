<template>
  <div class="info">
    <h1>项目经验</h1>
    <transition :duration="{ enter: 2500, leave: 1500 }" enter-active-class="animated fadeInRight">
      <div class="cont" v-if="show">
        <el-carousel :autoplay="false" height="500px">
          <el-carousel-item v-for="item in profiles" :key="item">
            <h2 v-text="item.name"></h2>
            <p v-text="'技术栈: ' + item.skills"></p>
            <p v-html="item.content" style="text-align: left;"></p>
            <p v-html="item.mySkills" style="text-align: left;"></p>
            <!-- <p v-text="'github地址: ' + item.github"></p> -->
          </el-carousel-item>
        </el-carousel>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      profiles: [
        {
          name: "华润医药商业-财务报账系统",
          skills: "vue vue-cli vue-router vuex axios  echart iview webpack",
          content:
            "项目介绍:<br />" +
            "1.财务报账系统是华润集团旗下各利润中心财务共享中心运营的核心系统，主要包括:发起报账申请，我的报账单，会计任务池，付款工作台等几大模块<br/>" +
            "2.此项目是一个中大型项目，又是多人协同开发，所以模块解耦很重要，不然人多也是枉然啊，对于公共组件我们前期就必须定义好API(props,events,slots)(虽然后期会有所优化),公共数据我们使用的是vuex统一维护，方便了数据重复使用。<br/>" +
            "3.此项目有很多个模块组成，如果多个前端人员同时编写一份前端代码会使得效率很低，冲突较高，于是我们采用的策略是每个大的模块为一个vue前端项目，每个模块由一个到两个人负责，而我还需要做的事就是把这几个项目合并到一个总的项目中，通过在packjson中引入，再通过router路由将多个项目模块路由拼接到一起，达到是一个项目的效果，其实这三种思想也是微服务的精髓，也是现在流行的敏捷开发，这种分模块式的开发既提交了开发效率，也方便了修复bug和后期维护。<br/>" +
            "4.项目框架用的是iview，底层为vue.js，在iview的基础上进行了二次开发，封装了很多通用的组件，例如，table组件，弹窗组件下拉框组件等等。<br />" +
            "5.项目的开发环境使用代理的方式解决跨域问题，配置多个代理，方便开发环境调试，<br />" +
            "6.项目的代码管理工具使用的是Git<br />",
          mySkills:
            "我的成就:<br />" +
            "1:掌握vue开发框架，能够独立搭建vue前后端分离式前端框架熟练掌握和后端人员接口联调，代理的配置。<br/>" +
            "2:精通vue组件的封装，父子组件通讯传值，我个人总结出了一句话：父向子传数据，子向父传事件。<br/>" +
            "3:熟练掌握vue路由机制(路由拦截，路由过滤，路由合并)。<br/>" +
            "4:熟练掌握vuex使用机制，工作中解决过多个vue对象如何共享一个vuex对象这个难题，对vuex颇有研究。<br/>" +
            "5:熟练掌握多个vue项目打包到一个项目中，通过router合并所有功能。<br/>" +
            "6:熟练掌握大中型vue项目模块式开发，提高开发效率。"
        },
        {
          name: "nativescript跨平台app开发框架",
          skills:
            "node express mongoose mongodb3.4 express-promise-router async/await语法",
          content:
            "项目介绍:<br />" +
            "1.NativeScript是一个不使用webview的情况下构建跨平台并且原生的iOS和Android应用。<br />" +
            "2.使用Angular、TypeScript或JavaScript来获得原生UI和性能体验，同时可重用web项目中的技术和代码。<br />" +
            "3.通过JavaScript实现100%的原生api访问通过JavaScript，并使用npm、CocoaPods、Gradle获取三方库或者插件，属于开源项目。<br />" +
            "4.nativescript跨平台app开发框架，我们封装了app需要的大部分组件，可二次开发。 <br />" +
            "5.功能模块：目前开发了12个模块，包括库存查询，往来账查询，流向查询，流向到期，在途查询，药监码查询，采购计划，平台分析，订单分布，代下单，订单查询，购物车  ",
          mySkills:
            "我的成就:<br />" +
            "1.框架刚启动的时候，app启动特别慢，使用时比较卡顿，用户体验和原生app差距很大，不断查阅官方文档以及对框架的不断学习，解决了这个问题，通过webpack打包之后的apk，运行在真机上，启动速度和响应速度明显加快了很多，基本上和原生app没有区别，<br />" +
            "2.NativeScript框架构建跨平台的原生iOS和Android应用程序而无需Web视图，使用的是Angular2，TypeScript或现代JavaScript来获得真正的原生UI和性能，所以要开发nativescript框架必须要对angular2比较熟悉 <br />" +
            "3.封装组件，尽量android 与 ios UI和功能适配，达到统一 4. 对angular2熟练掌握，包括对angular2路由以及模块，依赖注入深入了解 <br />" +
            "4.主要负责项目架构搭建，以及组件（轮播图，请求服务器图片，图片缓存以及清理缓存，列表listview,弹出框，选择相册图片，拍照，图片上传，坐标上传，路由监测，用户行为记录）封装，平台分析报表模块开发，订单分布地图模块开发，购物车模块开发，库存查询模块开发，以及android和ios适配"
        },
        {
          name: "mscmp App供应链",
          skills:
            "electron vue vue-cli vue-router axios qiniu nedb element-ui mavon-editor",
          content:
            "项目介绍:<br />" +
            "该项目主要包括 <br />" +
            "1.药品入库，2.库内管理，3.药品出库，4.药库报表，几大模块组成， ",
          mySkills:
            "我的成就:<br />" +
            "主要负责项目架构搭建，和药品出库业务实现，药库报表UI设计及实现，以及app首页九宫格UI设计和实现，菜单权限配置。<br />" +
            "技术要点：<br />" +
            "1：实现在一个mscmpApp中下载集团其他app功能，只需打开mscmpApp，点击其他app按钮，即可下载app以及自动安装，用到断点续传下载技术。<br />" +
            "2：动态控制权限菜单，九宫格菜单实现。"
        },
        {
          name: "掌上徽商",
          skills: "electron vue vue-cli element-ui",
          content:
            "项目介绍:<br />" +
            "一款介绍安徽风土人情的app，有历史，民俗，戏曲等等。",
          mySkills:
            "我的成就:<br />" +
            "1一个Activity配合fragment+viewpager实现统一管理。<br />" +
            "2实现分页数据加载（上拉刷新和下拉加载）。<br />" +
            "3ViewPagerIndicator和ViewPager的结合使用。<br />" +
            "4SharedPreference存储 <br />" +
            "5SQLite数据库的操作 <br />" +
            "6利用JSON技术减少数据传输冗余 <br />" +
            "7利用AsyncTask异步向服务器发送数据请求<br />" +
            "8利用ViewPager和Handler实现轮播显示。"
        },
        {
          name: "运动客",
          skills: "electron vue vue-cli element-ui",
          content:
            "项目介绍:<br />" +
            "有攻略，会运动。运动客，让运动成为一种信仰。这里汇集海量由运动达人、健身教练分享的各种健身、减肥、运动、瘦身、跑步实用攻略，更垂直、更细分、更专注的社交应用。 运动爱好者专属社区：看攻略，问难点，秀身材，结交志同道合的运动小伙伴。 口袋里的运动百科：达人答疑解惑，专家排忧解难，运动问题不是个事儿。",
          mySkills:
            "我的成就:<br />" +
            "1.表格页面标题实现使用ViewPagerIndicator开源框架。<br />" +
            "2.下拉刷新，加载更多，使用开源框架PullToRefresh <br />" +
            "3.ListView的使用与优化 <br />" +
            "4.ViewPager实现页面滚动 <br />" +
            "5.使用动画和PopupWindow实现小窗口的动作 <br />" +
            "6.实现第三方分享7.友盟统计"
        }
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
  }
};
</script>

<style lang="less" scoped>
@import "../less/index.less";
.info {
  .info;
  .cont {
    .cont;
    width: 90%;
    height: 80%;
    .item {
      background-color: rgba(59, 123, 13, 0.2);
      padding: 10px;
      border-radius: 15px;
      margin: 10px auto;
      @media screen and (max-width: 768px) {
        padding: 5px;
        margin: 5px auto;
      }
      &:hover {
        border-radius: 25px;
        background-color: rgba(10, 135, 87, 0.3);
      }
      p {
        text-align: left;
        text-indent: 28px;
        font-size: 1.1rem;
        line-height: 1.2;
        @media screen and (max-width: 768px) {
          text-indent: 12px;
          font-size: 0.7rem;
          line-height: 1.1;
        }
      }
    }
  }
}
.el-carousel__item h3 {
  // color: #475669;
  font-size: 15px;
  // opacity: 0.75;
  line-height: 600px;
  margin: 0;
}

.el-carousel__item:nth-child(n) {
  background-color: rgba(241, 233, 233, 0.904);
}

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
</style>
