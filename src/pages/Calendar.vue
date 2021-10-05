<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header bordered class="bg-white text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            {{ year }}
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
  <div class="row justify-center" style="margin-top: 5%">
    <Month v-for="month in months"
           :key="month.name"
           class="col-3 cursor-pointer"
           @click="$router.push({name:'detail', params:{month:month.name}})"
           :action-amount="month.actions.length"
           :month="month.name"/>
  </div>
    </q-layout>
  </div>
</template>
<script>
import Month from "@/components/Month";
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: "Calendar",
  components: {Month},
  setup(){
    const store = useStore()
    let months = computed(() => store.getters.getMonths)
    let d = new Date();
    let year = d.getFullYear()
    return {months, year}
  }
}
</script>

<style scoped>

</style>