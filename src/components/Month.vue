<template>
  <q-card class="my-card q-ma-xs">
    <q-img :src="imgUrl()">
      <div class="absolute-bottom">
        <div class="text-h6">{{ month }}</div>
        <div class="text-subtitle2">{{ actionAmount }}</div>
      </div>
    </q-img>
  </q-card>
</template>

<script>
export default {
  props:{
    month: String,
    actionAmount: Number
  },
  name: "Month",
  setup(props){
    function imgUrl(){
      if (props.month==='January' || props.month ==='February' || props.month ==='December'){
        return 'winter.jpg';
      }else if(props.month==='March' || props.month ==='April' || props.month ==='May'){
        return 'spring.jpg';
      } else if(props.month==='June' || props.month ==='July' || props.month ==='August'){
        return 'summer.jpg';
      }else {
        return 'autumn.jpg'
      }
    }
    return{imgUrl}
  }
}
</script>

<style scoped>

</style>