let nickname:string = 'ぽち';
console.log(nickname);

const firstName:string = 'ぴーこ';
console.log(firstName);

let isActive: boolean = true;

let color: string | undefined;

type Product = {
    name:string;
    price:number;
}

let product: {name:string,price:number} = {
    name:'りんご',
    price:300,
}

console.log(product);

product.name = 'みかん'
console.log(product.name)

product.price = 300
console.log(product.price)

const outputProduct = (name:string, price:number): void => {
    console.log('やあ')
    console.log(`${name}は${price}円です。`)
}

outputProduct('みかん',400)
outputProduct('桃',500)
outputProduct('ブドウ',700)

let userAge = 40
let userType: string = userAge > 20 ? "adult" : "child";
console.log(userType);

let age:number = 25

if(age >= 19){
    console.log("大人")
} else if(age >=16 && 18 <= age){
    console.log("高校生")
} else if(age >= 13 && 15 <= age){
    console.log("中学生")
} else {
    console.log("子供")
}