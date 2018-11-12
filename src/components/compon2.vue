<template>
    <div class="info">
        <h1 style=" color: rgba(220, 228, 220, 1)">技术栈</h1>
        <transition :duration="{ enter: 2500, leave: 1500 }" leave-active-class="animated fadeOutRight" enter-active-class="animated fadeInLeft">
            <div class="cont" v-if="show">
                <template v-for="skill in skills">
                    <el-row :gutter="20" :key="skill.name">
                        <el-col :span="8">
                            <div class="left" :style="{backgroundColor: `${skill.background}`}">
                                <h2>{{skill.name}}</h2>
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <el-row :gutter="10">
                                <template v-for="child in skill.child">
                                    <el-col :span="12" :key="child.name">
                                        <div class="right" :style="{backgroundColor: child.background}">
                                            <h3>{{child.name}}</h3>
                                        </div>
                                    </el-col>
                                </template>
                            </el-row>
                        </el-col>
                    </el-row>
                </template>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
  // let randomcolor = rgba()
  data() {
    return {
      show: false,
      skills: [
        {
          name: "前端Vue",
          background: "rgba(252, 247, 247, 0.3)",
          child: [
            { name: "js,css,html", background: "rgba(252, 247, 247, 0.3)" },
            { name: "VueRouter", background: "rgba(252, 247, 247, 0.3)" },
            { name: "Vuex", background: "rgba(252, 247, 247, 0.3)" },
            { name: "axios", background: "rgba(252, 247, 247, 0.3)" }
          ]
        },
        {
          name: "Android",
          background: "rgba(252, 247, 247, 0.3)",
          child: [
            { name: "java", background: "rgba(252, 247, 247, 0.3)" },
            { name: "四大组件", background: "rgba(252, 247, 247, 0.3)" },
            { name: "fragment", background: "rgba(252, 247, 247, 0.3)" },
            { name: "架构搭建", background: "rgba(252, 247, 247, 0.3)" }
          ]
        },
        {
          name: "服务端",
          background: "rgba(252, 247, 247, 0.3)",
          child: [
            { name: "NodeJs", background: "rgba(252, 247, 247, 0.3)" },
            { name: "mySql", background: "rgba(252, 247, 247, 0.3)" },
            { name: "java", background: "rgba(252, 247, 247, 0.3)" },
            { name: "ES6", background: "rgba(252, 247, 247, 0.3)" }
          ]
        },
        {
          name: "工具",
          background: "rgba(252, 247, 247, 0.3)",
          child: [
            { name: "Git", background: "rgba(252, 247, 247, 0.3)" },
            { name: "WebPack", background: "rgba(252, 247, 247, 0.3)" },
            { name: "svn", background: "rgba(252, 247, 247, 0.3)" },
            { name: "VS Code", background: "rgba(252, 247, 247, 0.3)" }
          ]
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
    .left {
      margin: 5px auto;
      width: 100%;
      height: 120px;
      // background-color: rgba(252, 247, 247, 0.3);
      line-height: 120px;
    }
    .right {
      height: 55px;
      // background-color: rgba(252, 247, 247, 0.3);
      line-height: 55px;
    }
  }
}
</style>
