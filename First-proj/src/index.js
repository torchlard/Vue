
let app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue'
  }
})

app.message = "I have changed the date"

let app2 = new Vue({
  el: "#app-2",
  data: {
    message: "you loaded this page on " + new Date().toLocaleString()
  }
})

let app3 = new Vue({
  el: "#app-3",
  data: {
    seen: false
  }
})

let app4 = new Vue({
  el: "#app-4",
  data: {
    todos:[
      {text: 'learn js'}, {text: 'learn vue'}, {text: 'build sth '}
    ]
  }
})

let app5 = new Vue({
  el: "#app5",
  data: {
    message: "Hello Vue.js!",
    msg: "hihi"
  },
  methods: {
    reverseMsg: () => app5.message=app5.message.split('').reverse().join('')
  }
})

let app6 = new Vue({
  el: "#app6",
  data: {
    msg: "Hello Vue!",
    message: 'input'
  }
})

// Vue.component('todo-item', {
//   template: '<li>this is a todo</li>'
// })
// let app7 = new Vue({el: "#app7"})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})
let app_7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      {id:0, text: 'vegetable'},
      {id: 1, text: 'cheese'},
      {id: 2, text: 'whatever'}
    ]
  }
})








