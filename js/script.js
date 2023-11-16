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
          done: false,
        },
        {
          text: "Dentista",
          done: false,
        },
        {
          text: "Esercizi",
          done: false,
        },
        {
          text: "Spesa",
          done: false,
        },
        {
          text: "Lavare macchina",
          done: false,
        },
        {
          text: "Ritirare merce",
          done: false,
        },
      ],
      newToDo: "",
      errorVisible: false,
    };
  },

  mounted() {
    setInterval(this.deleteDoneItem, 5000);
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
    },

    addItem: function () {
      this.errorVisible = false;
      if (this.newToDo !== "") {
        this.items.push({
          text: this.newToDo,
          done: false,
        });
        this.newToDo = "";
        this.errorVisible = false;
      } else {
        this.errorVisible = true;
      }
    },

    deleteDoneItem: function () {
      for (i = 0; i < this.items.length; i++) {
        // console.log(this.items);
        // console.log(this.items[i]);
        // console.log(i);
        if (this.items[i].done === true) {
          this.items.splice(i, 1);
        }
      }
    },
  },
});

app.mount("#app");
