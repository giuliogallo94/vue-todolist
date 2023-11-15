const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      toDo: ["Riordinare", "Leggere", "Dentista", "Esercizi", "Palestra"],
      done: [],
      checked: false,
    };
  },

  methods: {
    sendToDone: function (index, value) {
      this.toDo.splice(index, 1);

      console.log(this.toDo);
      this.done.push(value);
      console.log(this.done);
    },
  },
});

app.mount("#app");
