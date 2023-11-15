const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      items: [
        {
          text: "Riordinare",
          done: false,
        },
        {
          text: "Leggere",
          done: true,
        },
        {
          text: "Dentista",
          done: true,
        },
        {
          text: "Esercizi",
          done: false,
        },
        {
          text: "aaa",
          done: false,
        },
        {
          text: "bbb",
          done: true,
        },
        {
          text: "ccc",
          done: false,
        },
      ],
    };
  },

  methods: {
    // sendToDone: function (index, value) {
    //   this.toDo.splice(index, 1);

    //   console.log(this.toDo);
    //   this.done.push(value);
    //   console.log(this.done);
    // },

    // sendToDo: function (index, value) {
    //   this.done.splice(index, 1);
    //   //   console.log(this.toDo);
    //   this.toDo.push(value);
    //   //   console.log(this.done);
    // },

    deleteItem: function (index) {
      this.items.splice(index, 1);
      console.log(this.items);
    },
  },
});

app.mount("#app");
