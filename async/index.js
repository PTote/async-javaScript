const fnAsync = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => {
            resolve('Async!!!')
        }, 2000)
        : reject(new Error('Error'));
    })
};

const anotherFN = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('FINISH ANOTHER Fn');
};

// const anotherFNNoAsync =  () => {
//     fnAsync()
//     .then( data => console.log(data))
//     .catch(error => console.log(error));
//     console.log('FINISH ANOTHER Fn');
// };

console.log('BEFORE');
anotherFN().catch(error => console.log(error));
// anotherFNNoAsync();
console.log('AFTER');