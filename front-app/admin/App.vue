<template>
  <div id="app">
    <el-container style="height:100%;">
      <el-header>
        后台管理
        <a href="/auth/logout">登出</a>
      </el-header>
      <el-container>
          <el-aside>
            <div class="grid-content">
              <el-menu>
                <el-menu-item
                        v-for="(route,index) in $router.options.routes"
                        v-if="!route.hidden"
                        :index="route.path"
                        @click="click(route.path)"
                        :key="index"
                >
                  {{route.name}}
                </el-menu-item>
              </el-menu>
            </div>
          </el-aside>
          <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
      click(path){
          this.$router.push(path)
      }
  },
  mounted(){
      console.log(this.$router.options.routes)
  }
}
</script>

<style>
  body{
    margin:0;padding:0;
  }
  .el-header{
    background: #409EFF;display: flex;align-items: center;color: #fff; justify-content:space-between;
  }
  .el-aside{
    background: #409EFF;
  }
  .el-menu{
    border-right:0;
    background: none;
  }
  .el-menu-item{
    color: #fff;
  }
  .el-menu-item:hover{
    color:#666;
  }
  .el-menu-item.is-active{
    background: #fff;
  }
  .pull-right{
    float:right
  }
  .pull-left{
    float:left
  }
  .clearfix:after{
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
  }
</style>
