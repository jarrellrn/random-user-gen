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
    // getUser() {
    //   this.firstName = "Beebo",
    //   this.lastName = "the Not Smuggler",
    //   this.email = "beebo@legitbusiness.com"
    //   this.gender = "thief",
    //   this.picture = "./assets/beebo.jpg"
    // }
    async getUser() {
      const res = await fetch("https://randomuser.me/api")
      const { results } = await res.json()

      this.firstName = results[0].name.first 
      this.lastName = results[0].name.last 
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.large
    }
  }
})

app.mount("#app")