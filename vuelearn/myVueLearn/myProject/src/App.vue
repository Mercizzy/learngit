<template>
  <div id="app">
    <p>全选</p>
    <input type="checkbox" id="checkbox" v-model="checked" @change="change()">
    <label for="checkbox">{{checked?'全不选':'全选'}}</label>

    <p>复选框</p>
    <input type="checkbox" id="apple" v-model="checkboxName" value="apple">
    <label for="apple">apple</label>
    <input type="checkbox" id="pear" v-model="checkboxName" value="pear">
    <label for="pear">pear</label>
    <input type="checkbox" id="banana" v-model="checkboxName" value="banana">
    <label for="banana">banana</label>

    <p>{{checkboxName}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      checked: false,
      checkboxName: [],
      allName: ["apple","pear","banana"]
    }
    
  },
  methods: {
    change: function () {
      if(this.checked){
        this.checkboxName = this.allName;
      }else{
        this.checkboxName = [];
      }
    }
  },
  watch: {
    "checkboxName": function () {
      if(this.checkboxName.length == this.allName.length){
        this.checked = true;
      }else{
        this.checked = false;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
