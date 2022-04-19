// var grade = 89;

// if (grade > 55 && grade <=65) {
//     console.log("ocena je 5")
// }
// else if (grade > 65 && grade <=75) {
//     console.log("ocena je 6")
// }
// else if (grade > 75 && grade <=85) {
//     console.log("ocena je 7")
// }
// else if (grade > 85 && grade <=95) {
//     console.log("ocena je 8")
// }
// else if (grade > 95 && grade <=100) {
//     console.log("ocena je 9")
// }
// else {
//     console.log("niste polozili ispit")
// }

// var a = 20;
// var b = 30;
// var c = 55;
// if (a > b) {
//     console.log(`veci broj je ${a}`)
// }
// else {
//     if (b > c) {
//         console.log(`veci broj je ${b}`)
//     } else {
//         console.log(`veci broj je ${c}`)
//     }
// }
//     if (c > a) {
//         console.log(`veci broj je ${c}`)
//     } else {
//         console.log(`veci broj je ${a}`)
//     }

// var num1 = 20;
// var num2 = 30;
// var num3 = 55;

// function compare(num1, num2, num3) {
// 	if (num3 > num2 && num1 > num3) {
// 		return num1 + ' is the biggest number';
// 	} else if (num2 > num1 && num2 > num3) {
// 		return num2 + ' is the biggest number';
// 	} else {
// 		return num3 + ' is the biggest number';
// 	}
// }
// var results = compare(10, 20, 30);
// console.log(results);


// var a = { name: "Aisa", surname: "Nicevic" };
// if (a['name']) {
//     console.log("objekat ima property address")
// }
// console.log(a)
// console.log(a.name);

// var a = { name: undefined, surname: "Nicevic" };
// var aKeys = Object.keys(a);
// var aValues = Object.values(a);
// console.log(aKeys.includes("surname"));
// console.log(aKeys, aValues);


// if (a['name']!==undefined) {
//     console.log("objekat ima property address")
// }

var objekat = {
    name: "Aisa",
    surname: "Nicevic",
    address: {
        street: "stevana nemanje",
        number: 202,
        city: "novi pazar"
    },
    friends: [{ name: "Ajsa" }, { name: "Amina" }],
};
// console.log(objekat.friends[1].name);

objekat.fullName = `${objekat.name} ${objekat.surname}`;
console.log(objekat)
objekat.friends.push({ name: "Belkisa" });
console.log(objekat)
// delete objekat.name
//     friend: ["Amina", "Ajsa"]
// };

// console.log(objekat.friend[1])