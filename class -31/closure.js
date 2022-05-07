// let name = 'John';

// function greeting() { 
//     let message = 'Hi';
//     console.log(message + ' '+ name);
// }

function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    sayHi();
}

greeting();