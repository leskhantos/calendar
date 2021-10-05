<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
      <q-header bordered class="bg-white text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            {{ this.$route.params.month }}
          </q-toolbar-title>
          <q-btn flat round dense @click="this.$router.push('/')" icon="arrow_back" />
        </q-toolbar>
      </q-header>


      <q-page-container class="row justify-center">
        <q-page class="q-pa-md" >
          <q-btn class="q-ma-md" v-if="curMonth <= selectedM" dense color="secondary" label="Add action" @click="this.addShow = true" ></q-btn>
          <div class="q-pa-md" style="max-width: 350px">
            <q-list bordered separator>
              <q-item v-for="item in actions" :key = item.id>
                <q-item-section><p>{{ item }}</p></q-item-section>
                <q-item-section>
                  <q-btn color="blue" v-if="curMonth <= selectedM"  label="Update" @click="updateFunc(item)" size=sm></q-btn>
                  <q-btn class="q-mt-sm" color="red" v-if="curMonth <= selectedM" label="Delete" @click="removeAction(item)"  size=sm ></q-btn>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-page>
      </q-page-container>
      <q-dialog
          v-model="addShow"
      >
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-h6">Add</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input filled v-model="text" placeholder="Action" hint="enter action" />
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" @click="addAction()" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog
          v-model="updateShow"
      >
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-h6">Update</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input filled v-model="updatedText" placeholder="Action" hint="enter action" />
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" @click="updateAction" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-layout>
  </div>


</template>

<script>
import {ref, computed} from 'vue'
import {useStore} from "vuex";
import {useRoute} from "vue-router"
import moment from "moment";
export default {
  name: "Detail",
  setup(){
    const route = useRoute()
    const store = useStore()
    let addShow = ref(false)

    let updatedText = ref('')
    let oldText = ref('')
    let updateShow = ref(false)
    let text = ref('')
    let month = route.params.month
    let d = new Date();
    let curMonth = d.getMonth()+1
    let selectedM = parseInt(moment().month(month).format("M"))
    let actions = computed(() => store.getters.getMonthsActions(month)).value.actions
    function updateFunc(item){
      this.updateShow = true
      this.updatedText = item
      this.oldText = item
    }
    function updateAction(){
      let payload = {
        name: route.params.month,
        action: oldText,
        updatedText: updatedText
      }
      store.commit('updateAction', payload)
    }

    function addAction(){
      let payload = {
        name: route.params.month,
        action: this.text
      }
      store.commit('addAction', payload)
    }

    function removeAction(item){
      let payload = {
        name: route.params.month,
        action: item
      }
      store.commit('removeAction', payload)
    }
    return{addShow,updateShow,updatedText,text,oldText, actions,updateFunc,addAction,removeAction,updateAction,selectedM,curMonth}
  }
}
</script>

<style scoped>

</style>