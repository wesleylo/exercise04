// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  data: {
    titleInput:'',
    contentInput:'',
    cards: [

    ]
  },
  methods: {
    newCard() {
      this.cards.push({
        title: this.titleInput,
        content: this.contentInput
      });
      this.titleInput='';
      this.contentInput='';
    },
    cancel() {
      this.titleInput='';
      this.contentInput='';
    },
    remove(i) {
      var index=this.cards.indexOf(i);
      this.cards.splice(index, 1);
    }
  }
});
