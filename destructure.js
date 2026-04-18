const person = {
    name: 'steve ken',
    country: 'Nigeria',
    Age: 20
};

//const { name, country,Age } = person;

//console.log(name);
//console.log(country);
//console.log(Age);

   //Destructure of objects
let attendance = {
    name: 'steve ken',
    country: 'Nigeria',
    Age: 20
};

let {name: Fullname, country: Nation, Age: Years} = attendance;

console.log(Fullname);
console.log(Nation);
console.log(Years);
       //Destructure of arrays
const JAMBscores = [100, 90, 88, 76]
const [English, maths, physics, chemistry] = JAMBscores;
console.log(English);
console.log(maths);
console.log(physics);
console.log(chemistry);

const movie = {
    series: 'james bond'
}

const { series, year = 1994} = movie;
console.log(series);
console.log(year);

const FOREXpairs = {
    GBPUSD: {
        order: 'BUY',
        askprice: 1.9865,
        SL: 1.9800,
        TP: 2.4556
},
GBPJPY: {
    order: 'SELL',
    askprice: 205.655,
    SL: 205.600,
    TP: 207.800,
}
}

const {order, askprice, SL, TP } = FOREXpairs.GBPJPY;
console.log(order)
    console.log(askprice);
console.log(SL);
console.log(TP);
