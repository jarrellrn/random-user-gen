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
      console.log(this.firstName)
    }
  }
})

app.mount("#app")