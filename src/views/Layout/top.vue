<template>
  <div class="header">
      <div class="left">
          <el-button v-if="iscollapse" type="primary" @click="TOGGLE" size="small" icon="el-icon-s-fold"></el-button>
           <el-button v-else type="primary" @click="TOGGLE" size="small" icon="el-icon-s-unfold"></el-button>
          <el-breadcrumb  class="lt-btn">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        <el-button icon="el-icon-back" circle size="mini" v-if="$route.path!='/index'" @click="$router.back()"></el-button>
      </div>
      <div class="right">
          <el-dropdown>
            <span class="el-dropdown-link">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-full-screen">全屏操作</el-dropdown-item>
              <el-dropdown-item icon="el-icon-user">个人信息</el-dropdown-item>
              <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
    data(){
        return{}
    },
    created(){}, 
    computed:{
        ...mapState(['iscollapse'])
    },
    methods:{
        ...mapMutations(['TOGGLE'])
    },
    components:{}
}

</script>
<style scoped>
.header{
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left{
    display:flex;
    align-items: center;
}
.left .lt-btn{
    margin: 0 20px;
}
</style>