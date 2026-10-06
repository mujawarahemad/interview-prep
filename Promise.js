//learning about promises 
//write a simple promise

function userid(id) {
    return new Promise((resolve, reject) => {

        console.log('Fetching data.... plase wait')

        setTimeout(() => {
            if(id > 0){
                resolve({ userid : id, name : "Ahemad", role : "QA engineer"})
            }
            else{
                reject("Invalid user id")
            }
        }, 2000);
    })
}

async function getUser() {
    try {
        const data = await userid(200);
        console.log("Success")
    }
    catch(error){
        console.log("error", error)
    }
}

getUser();

//-----------------------------------



let even = (number) => {
    return new Promise((resolve, reject) => {
        if(number % 2 ==0){
            resolve(`${number} is even number`);
        }
        else{
            reject(`${number} is odd number`);
        }
    })
}

even(35)
.then((message) => console.log(message))
.catch((error) => console.log(error));