<template>
<div>
    <header>
      <div class="back iconfont">&#xe624;</div>
     <div class="search">
       <i class="iconfont search-ico">&#xe6dd;</i>
       请输入景点/城市名/景区
     </div>
      <span class="city">北京</span>
    </header>
</div>
</template>
<script>
export default {
   name : 'index-header'
}
</script>
<style lang="scss" scoped>
$bgColor:#00bcd4;
 header{
     display: flex;
     align-items: center;
     height: .88rem;
     font-size: 12px;
     background: $bgColor;
     color: #fff;
     .back{
       margin-left: .1rem;
       margin-right: .2rem;

       font-weight: bold
     };
     .search{
       flex: 1;
       height: .6rem;
       margin-top: .01rem;
       background-color: #fff;
       border-radius: .1rem;
       line-height: .6rem;
       color:#ddd;
       text-indent: .2rem;
     }
     .city{
       padding: 0 .6rem 0 .2rem
     }
  }

</style>
