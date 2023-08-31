function splitPhrase(str){
    const array = str.split(' ');
    const returnedArray = [];

    for(n of array){
        if (n != '' && !returnedArray.includes(n)){
            returnedArray.push(n)
        }
    }

    return returnedArray;
}

const phrase = "campo de cachorros quentes  vermelhos  quentes de vermelhos"
const ro = splitPhrase(phrase);
console.log(ro)