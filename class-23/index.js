// const obj = {
//     user: 'aisa', age: 17, address: { street: 'stevana nemanje', number: 200, city: "Novi Pazar" }
// };

// const { user, age, address } = obj;
// const {street, number, city}=address;

// console.log(street);


// const array = [1, 2, 3, 4, 5];

// const [x, , , y] = array;

// console.log(x, y);


class Car {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    getType() {
        return this.type;
    }
    toString() {
        JSON.stringify(this);
    }
}



const car1 = new Car("bmw", 2000);

const car2 = new Car("audi", 2000);

