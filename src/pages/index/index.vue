<template>
  <index-header></index-header>
</template>

<script>
//引入头部组件,注意要加个./
import IndexHeader from  './header'

export default {
  name : 'index',
  //注册头部组件，在template里面使用；注意在里面是怎么写的；
  components :{
    IndexHeader
  }
}
</script>


<style scoped>

</style>


