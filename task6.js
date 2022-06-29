console.log ('person1: show ticket');
console.log ('person2: show ticket');

const preMovie =async () => {
    
    const promiseWifeBringingTicks = new Promise ((resolve, reject) => {
        setTimeout (() => resolve ('ticket'),3000); 
    });

    const getPopcorn = new Promise ((resolve, reject) => resolve ('Popcorn'));
    
    const getCandy = new Promise ((resolve, reject) => resolve ('Candy'));

    const getCoke = new Promise ((resolve, reject) => resolve ('Coke'));

    const getColdDrinks = new Promise ((resolve, reject) => resolve ('Get Cold Drinks'));


    let ticket =await promiseWifeBringingTicks;
        

    let [Popcorn, Candy, coke] = await Promise.all([getPopcorn,getCandy,getCoke])
    
 
    console.log(`${Popcorn}, ${Candy}, ${coke}`);

    let ColdDrinks = await getColdDrinks;
    console.log (`husband : I got the cold drink`);

    return ticket;
}

preMovie().then((m) => console.log(m));

console.log ('person3: show ticket');
console.log ('person4: show ticket');