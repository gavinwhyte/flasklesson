var app = new Vue({
  el: '#apps',
  data: {
    messages: 'Hello Mike!',
    counter: 0,
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  },
  delimiters: ['[[',']]']
})
