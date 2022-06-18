
    // function verifyPassword() {
    //     var pw = document.getElementById("pswd").value;
    //     if (pw == "lozinka") {
    //         document.getElementById("message").innerHTML = "lozinka";
    //         return false;
    //     }

    //     //minimum password length validation  
    //     if (pw.length < 8) {
    //         document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
    //         return false;
    //     }

    //     //maximum length of password validation  
    //     if (pw.length > 15) {
    //         document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
    //         return false;
    //     } else {
    //         alert("Password is correct");
    //     }
    // }  



// const wordArr = ['blastoff', 1, 2, 3];

// for (let index = wordArr.length - 1; index >= 0; index--) {
//   const element = wordArr[index];
//   console.log(element);
// }


// const getQuotes = async (page = 1) => {
//   try {
//     const response = await fetch(
//       `https://api.quotable.io/quotes?${page ? `page=${page}` : ""}`
//     );

//     const result = await response.json();

//     return result.results;
//   } catch (error) {
//     console.log(error);
//   }
// };

// let page = 1;
// const contentDiv = document.getElementById("content");
// const pageInput = document.getElementById("page");

// const createCard = (author, quote) => {
//   return `<div
//  style="
//    width: 400px;
//    min-height: 100px;
//    border: 1px solid black;
//    margin: 10px;
//    padding: 20px;
//  "
// >
//  <p>
//    ${quote}
//  </p>
//  <p>By: ${author}</p>
// </div>`;
// };

// getQuotes().then((result) => {
//   result.forEach((quote) => {
//     console.log(contentDiv.innerHTML);
//     contentDiv.innerHTML =
//       contentDiv.innerHTML + createCard(quote.author, quote.content);
//   });
//   //   contentDiv.appendChild();
// });

// function nazivFunkcije() {
//   console.log('komanda funkcije')
//   console.log('komanda funkcije')
//   console.log('komanda funkcije')
  
// }


// console.log('comanda')
// console.log('comanda')
// console.log('comanda')
// console.log('comanda')
// console.log('comanda')
// nazivFunkcije()

// function nazivFunkcije(arg1) {
//   console.log("nesto", arg1)
  
// }

// nazivFunkcije("dobro")
// wordArr=[3,2.4,3]
// function vracanjeBrojeva(br1) {
//   for (let i = wordArr.length - 1; i >= 0; i--) {
//     const element = wordArr[i];
//     console.log(element);
// }

// }

// vracanjeBrojeva()


// function vracanjeBrojeva(n)
// {
// 	n = n + "";
// 	return (Numbern.split("").reverse().join(""));
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



