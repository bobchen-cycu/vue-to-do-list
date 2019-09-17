var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    todos:[
        {text:  "the first item.",done: true },
        {text:  "the second one.",done: false },
        {text:  "the third one." ,done: false }
    ]
  }
})