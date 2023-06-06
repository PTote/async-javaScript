const promise = new Promise((resolve, reject) => {
  resolve("Response ok");
});

const cows = 15;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("There is no cowws on the farm");
  }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => console.log(error))
.finally(() => console.log('Finally'));


const delay = (time, message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, time);
    })
};

delay(3000, 'Hello afters 3s').then((result) => console.log(result));