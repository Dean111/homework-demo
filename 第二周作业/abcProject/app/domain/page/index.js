export const Routes = {
  Example0 : {
    name:"Example0",
    Title:"Example0",
    get Component(){return require("./Example0").Example0}
  },
  Example1 : {
    name:"Example1",
    Title:"Example1",
    Inverse : true, // 深色的NavBar
    get Component(){return require("./Example1").Example1}
  },
  Example2 : {
    name:"Example2",
    Title:"Example2",
    get Component(){return require("./Example2").Example2}
  },
  Example3 : {
    name:"Example3",
    Title:"Example3",
    get Component(){return require("./Example3").Example3}
  },
  Home : {
    name:"Home",
    Title:"Home",
    get Component(){return require("./Home").Home}
  },

}
