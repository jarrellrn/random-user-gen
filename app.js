const app = Vue.createApp({
  
  data() {
    return {
      firstName: "Chip",
      lastName: "MacReady",
      email: "wolfie@gmail.com",
      gender: "dogy",
      picture: "./assets/chip.jpg"
    }
  },
  methods: {
    // getUser() {
    //   console.log(this.firstName + " is a good boy")
    // }
    getUser() {
      this.firstName = "Beebo",
      this.lastName = "the Not Smuggler",
      this.email = "beebo@legitbusiness.com"
      this.gender = "thief",
      this.picture = "./assets/beebo.jpg"
    }
  }
})

app.mount("#app")