function testRetVal(){
    let input = [1,2,3,4,5];
    let res = getHighest(input);
    if (res == undefined){
        return false;
    }
    else{
        return true;
    }
}

// Passes "Does it return a value?"
// function getHighest(input){
//     return 0;
// }

function testResInArray(){
    let input = [1,2,3];
    let res = getHighest(input);
    if (res == 1 || res == 2 || res == 3){
        return true;
    }
    else{
        return false;
    }
}

// Passes "Does it return an element from the array?"
// function getHighest(input){
//     return input[0];
// }

function testCorrectRes(){
     let input = [1,2,3];
    let res = getHighest(input);
    if (res == 3){
        return true;
    }
    else{
        return false;
    }
}

function getHighest(input){
    let max = input[0];
    for(let i = 1; i < input.length; i++){
        if (input[i] > max)
            max = input[i];
    }
    return max;
}

let res = testCorrectRes();
if (res) console.log("testCorrectRes passed");
else console.log("testCorrectRes failed");
