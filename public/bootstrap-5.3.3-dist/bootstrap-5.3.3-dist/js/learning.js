// console.log("Do you think the number is greater than 5?");

function getRandomNumber(min, max){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * (max - min + 1) + min);
            resolve(random);
        }, 1000);
    });
    return promise;
}

function printRandomNumber(random){
    console.log(random);
}

async function printRandomNumberAsync(){
        let random = await getRandomNumber(1, 10);
        printRandomNumber(random);
}

printRandomNumberAsync();
