const app = Vue.createApp({
  
  data() {
    return {
      firstName: "Chip",
      lastName: "MacReady",
      email: "wolfie@gmail.com",
      gender: "dogy",
      picture: "./assets/wolfie.png"
    }
  },
  methods: {
    getUser() {
      console.log(this.firstName + " is a good boy")
    }
  }
})

app.mount("#app")