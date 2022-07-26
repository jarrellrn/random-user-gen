const app = Vue.createApp({
  
  data() {
    return {
      firstName: "Chip",
      lastName: "MacReady",
      email: "wolfie@gmail.com",
      gender: "N/A",
      picture: "./assets/wolfie.png"
    }
  }
})

app.mount("#app")