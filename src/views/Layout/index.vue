<template>
  <div>
      <el-container class="page">
          <el-aside :width="iscollapse ? '64px' : '200px'" class="page-nav">
              <left/>
              <!-- Aside content -->
          </el-aside>
          <el-container class="page-content">
              <el-header  class="page-header">
                  <top/>
                  <!-- Header content -->
              </el-header>
              <el-main height="" class="page-main">
                  <!-- Main content -->
                   <router-view/>
              </el-main>
          </el-container>
      </el-container>
      
     
  </div>
</template>

<script>
import top from "./top";
import left from "./left"
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
    components:{
        top,left
    }
}

</script>
import top from "./top"
<style scoped>
.page{
    width:100vw;
    height:100vh;
}
.page-nav{
    height: 100%;
    background-color: #333;
}
.page-content{
    height: 100%;
    background-color: #f3f3f3;
}
.page-header{
    background-color: #fff;
    box-shadow: 0 0 2px 0
}
</style>