<template>
  <div>
      <h3 class="logo">小U商城后台</h3>

      <!-- 菜单组件 -->
      <el-menu class="page-menu"
      background-color="#333" 
      text-color="#fff" 
      router 
      :default-active="$route.path"
      :collapse="iscollapse">
          <el-menu-item index="/index" router>
               <i class="el-icon-setting"></i> 
              <span slot="title">后台首页</span>
          </el-menu-item>
          <el-submenu  index="2">
              <template slot="title"> <i class="el-icon-setting"></i>  <span slot="title"> <span slot="title">系统设置</span></span></template>
              <el-menu-item index="/menu">菜单管理</el-menu-item>
              <el-menu-item index="/role">角色管理</el-menu-item>
              <el-menu-item index="/user">管理员管理</el-menu-item>
          </el-submenu>
           <el-submenu index="1">
              <template slot="title"> <i class="el-icon-goods"></i>  <span slot="title">商城管理</span></template>
              <el-menu-item index="/category">商品分类</el-menu-item>
              <el-menu-item index="/spece">商品规格</el-menu-item>
              <el-menu-item index="/goods">商品管理</el-menu-item>
              <el-menu-item index="/member">会员管理</el-menu-item>
              <el-menu-item index="/banner">轮播图管理</el-menu-item>
              <el-menu-item index="/seckill">秒杀活动</el-menu-item>
          </el-submenu>
          
      </el-menu>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{}
    },
    computed:{
        ...mapState(['iscollapse'])
    },
    created(){},
    methods:{},
    components:{}
}

</script>
<style scoped>
.logo{
    color: #fff;
    line-height: 60px;
    text-align: center;
    background-color: #666;
    white-space: nowrap;
    overflow: hidden;
}
.page-menu{
    border-right:none;
}
</style>