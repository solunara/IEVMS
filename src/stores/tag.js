import { defineStore } from 'pinia';

export const useTagStore = defineStore('tag', {
  state: ()=>{
    return {
      tagLists: [{
        menu_name: '首页',
        menu_url: '/index',
        name: 'index'
      }]
    }
  },
  getters: {
    getTagLists: state => state.tagLists
  },
  actions: {
    addTag(item) {
      this.tagLists.push(item)
    },
    delTag(i){
      this.tagLists.splice(i,1);
    }
  }
})
