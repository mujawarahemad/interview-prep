//print duplicate elements array 
let a = [2, 4, 5, 2, 1, 4, 2, 5, 4, 3, 2, 4]

let duplicate = [];

for(let i =0; i <a.length; i++){
    for(let j = i +1; j<a.length; j++){

        if(a[i] === a[j]){

            if(!duplicate.includes(a[i])){
                duplicate.push(a[i])
            }
        }
    }
}
console.log(duplicate)