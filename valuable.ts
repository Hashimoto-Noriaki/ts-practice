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