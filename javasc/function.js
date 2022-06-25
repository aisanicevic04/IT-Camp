// function vracanjeBrojeva(n)
// {
// 	n = n + "";
// 	return (numn.split("").reverse().join(""));
// }
// console.log(vracanjeBrojeva(32243));

// function showUserInfo(username, pasword, name) {
//     console.log(username)
//     console.log(pasword)
//     console.log(name)

// }
// user = {
//     username: "aisa",
//     pasword: 12345,
//     name: "aisa"
// };

// showUserInfo(user.username, user.pasword, user.name)

// function sumaBrojeva(num1, num2) {
//     res = num1 + num2;
//     return res
// }

// returnValue = sumaBrojeva(9, 10)
// console.log(returnValue)
// sumaBrojeva(10,23)

// function evenElements(arr) {
//     res = arr.filter((el) => {
//         if (el % 2 === 0) {
//             return el
//         }
//     });
//     return res
// }

// niz1 = [1, 2, 3, 4, 5, 6];
// niz2 = evenElements([])

// console.log(niz1)
// console.log(niz2)

// program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);

// function firstLetter(word) {
//     wordArr = word.split(" ");

//     for (let i = 0; i < wordArr.length; i++) {
//         wordArr[i].split("");
//         wordArr[i][0] = wordArr[i][0].toUpperCase();
//         wordArr[i]=wordArr.join(" ")
//     }
//     return wordArr.join(" ")
// }

// recenica = "the quick brown fox";
// recenica2 = firstLetter(recenica)

// console.log(recenica)
// console.log(recenica2)

// function dobarBr(num) {
//     let a = 0;
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//             a += i;
//         }
//     }

//     if (a === num && a !== 0) {
//         console.log("Dobar broj.");
//     } else {
//         console.log("Nije dobar broj.");
//     }
// }
// dobarBr(28);

// function func1(str1) {
//     var str = str1;
//     var a = "";
//     for (var x = 0; x < str.length; x++) {
//         // if (a.indexOf(str.charAt(x)) === -1)
//         if (!a.includes(x)) {
//             a += str[x];
//         }
//     }
//     return a;
// }
// console.log(func1("thequickbrownfoxjumpsoverthelazydog"));


// appoens = [25, 10, 5, 2, 1];
// amount = 46;

// money = [];


// while (amount > 0) {
//     if (amount - appoens[i] >= 0) {
//         amount -= appoens[i];
//         money.push(appoens[i]);

//     }
//     else {
//         i++;
//     }
// }

// console.log(money)



console.log(1)
console.log(2)

setTimeout(() => {
    console.log(3);
}, 1000);

console.log(4)

setTimeout(() => {
    console.log(5);
}, 1000);
