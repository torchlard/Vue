let data = {a: 1.5, rawHtml: "<p style='color:red'>hello world</p>",
  ok: 1, msg:'i love you' ,
  firstName:"John", lastName:"Doe"
}

const vm = new Vue({
  el: "#app1",
  data: data,
  created: function(){
    console.log('a is '+ this.a)
  },
  beforeCreate: ()=>console.log('before'),
  computed: {
    reversedMsg: function() {
      return this.msg.split('').reverse().join('')
    },
    now: function(){
      return Date.now()
    },
    fullName: {
      get: function(){
        return this.firstName + ' ' + this.lastName
      },
      set: function(newValue){
        let names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length-1]
      }
    } 
  }
})

console.log(vm.$data === data)

vm.$watch('a', (newVal, oldVal) => {
  console.log('change',newVal, oldVal)
})

vm.a = 5
data.a = 9
data.msg ='doreamon'
vm.fullName = 'Ham Paul'

const watchExample = new Vue({
  el: "#watch-ex",
  data: {
    question: '',
    answer: 'I cannot give you answer until you ask question'
  },
  watch: {
    question: function(newQ, oldQ){
      this.answer = 'Waiting for you to stop typing',
      this.debouncedGetAnswer()
    }
  },
  created: function(){
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function(){
      if(this.question.indexOf("?") === -1){
        this.answer = 'Question must contain ?'
        return
      }
      this.answer = 'thinking ...'
      let vm = this
      axios.get('https://yesno.wtf/api')
        .then( response => 
          vm.answer = _.capitalize(response.data.answer))
        .catch( err => vm.answer = 'Error!' + err)
    }
  }
})

const app2 = new Vue({
  el: "#app2",
  data: {
    isActive: true, hasError: false,
    // classObj: "static"
    activeClass: 'active', errorClass: 'error',
    activeColor: 'blue', fontSize: 30
  },
  computed: {
    classObj: function(){
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})

const app3 = new Vue({
  el: "#app3",
  data: {
    ok: false,
    type: 'C'
  }
})

const list_render = new Vue({
  el: "#ex-1",
  data: {
    prefix: 'ko',
    items: [
      {message: "foo"}, {message: 'Bar'}, {message: 'ccat'}
    ],
    objects: {
      firstName: 'john', lastName: 'doe', age: 30
    },
    gen: [1,2,3,4,5],
    gen2: [1,2,3,4,5,6]
  },
  methods: {
    even: numbers => numbers.filter(num => num%2==0)
  }
})
list_render.items.push({message: 'howtin'})
list_render.items.shift()
// immutable operation
list_render.gen = list_render.gen.filter(item => item%2)

const app4 = new Vue({
  el: "#app4",
  data: {
    counter: 0
  },
  methods: {
    greet: () => alert('Greet to you')
  }
})

const app5 = new Vue({
  el: "#app5",
  data: {
    message: '', message2: '',
    checked: 'true'
  }
})


Vue.component('button-counter', {
  data: function(){
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{count}} times. </button>'
})

new Vue({
  el: '#components-demo'
})

Vue.component('blog-post', {
  props: ['post'],
  template: `<div class="blog-post">
              <h4>{{post.title}} :</h4>
              <p>{{post.content}}</p>
              <button v-on:click="$emit('enlarge-text', 0.1)">
                Enlarge Text
              </button>
            </div> `
})
new Vue({
  el: "#app8",
  data: {
    posts: [
      {id:1, title:"my journey", content: "go china"},
      {id:2, title:"peter", content: "like mary"}
    ],
    postFontSize: 1
  }
})






