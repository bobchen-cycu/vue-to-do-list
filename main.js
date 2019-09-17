var app = new Vue({
  el: '#app',
  data: {
    inputValue:null,
    todos:[
        {text:  "the first item.",done: true },
        {text:  "the second one.",done: false },
        {text:  "the third one." ,done: false }
    ]
  },
  methods:{
      toggle:function(todo){
          todo.done=!todo.done
      },
    add: function(){
    this.todos.push({text:this.inputValue, done:false });
    this.inputValue="";
    }
}
})