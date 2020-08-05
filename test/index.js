const userLeft = false
const userWatchingCatMeme = false

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      })
    } else {
      resolve("Thanks for watching!")
    }
  })
}

watchTutorialPromise().then((message) => {
  console.log("Success" + message);
}).catch((error) => {
  console.log(error)
});
