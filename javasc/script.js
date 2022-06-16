
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



// const array = ['blastoff', 1, 2, 3];

// for (let index = array.length - 1; index >= 0; index--) {
//   const element = array[index];
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
// array=[3,2.4,3]
// function vracanjeBrojeva(br1) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     const element = array[i];
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




function evenElements(arr) {
    res = arr.filter((el) => {
        if (el % 2 === 0) {
            return el
        }
    });
    return res
}

niz1 = [1, 2, 3, 4, 5, 6];
console.log(niz1)