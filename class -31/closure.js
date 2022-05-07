// let name = 'John';

// function greeting() {
//     let message = 'Hi';
//     console.log(message + ' '+ name);
// }

// function greeting() {
//     let message = 'Hi';

//     function sayHi() {
//         console.log(message);
//     }

//     sayHi();
// }

// greeting();


const closure = (array) =>{
    return () => {
        return array.length>0 ? true:false
    }
}

const array1 = [223, 44, 3, 3, 22, 22]
const array2 = [12]

const isEmpty1 = closure(array1)
const isEmpty2 = closure(array2)

console.log()