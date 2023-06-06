const sum = (num1,num2) => {
 return num1 + num2;
};


const calc = (num1,num2, callback) =>{
    return callback(num1,num2);
};

console.log(calc(2,2, sum));

const gretting = (name) => {
    console.log('Hola', name);
};

setTimeout(gretting, 2000, 'Kevyn');