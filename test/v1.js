let p = new Promise((resolve, reject) => {
  let a = 10 + 50
  if (a == 40) {
  } else {
    reject("Failed!")
  }
})


p.then((message) => {
  console.log("This is in the then " + message)
}).catch((message) => {
  console.log("This is in the catch " + message)
})