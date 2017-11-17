<template>
  <div class="hello">
    <el-table :data="list" border>
      <el-table-column
        prop="id"
        label="id"
      >
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
      >
          <template scope="scope">
            <router-link :to=" 'user/'+scope.row.id ">{{scope.row.username}}</router-link>
          </template>
      </el-table-column>

      <el-table-column
        prop="nickname"
        label="用户昵称"

      >
      </el-table-column>

      <el-table-column
        prop="nickname"
        label="用户昵称"

      >
      </el-table-column>

      <el-table-column
        prop="createdAt"
        label="创建时间"
      >
      </el-table-column>


    </el-table>
  </div>
</template>

<script>
  import moment from 'moment';
  import {get_all_user} from './user.api'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
  methods:{

    fetch(){
      get_all_user(list=>{
        this.list = list;
      })
    }
  },
  mounted(){
      this.fetch()
  }
}
</script>

