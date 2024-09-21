// check number is positive, negative or zero
function checknumber(number){
    if(number > 0){
        console.log("Number is positive");
    }
    else if(number < 0){
        console.log("Number is negative");
    }
    else{
        console.log("Number is zero");
    }
}

checknumber(5);
checknumber(-8);
checknumber(0);

// check age is eligible for vote or not
function eligible(age){
    if(age >= 18 ){
        console.log("You are eligible to vote");
    }
    else{
        console.log("You are not eligible to vote");
    }
}

eligible(25);
eligible(16);