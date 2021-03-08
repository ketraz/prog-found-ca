// Question 1

var firstName = "Alex";

//question 2

var person = {
    gender: "female",
    age: 29,
};

// Question 3

var outOfStock = false;
if (outOfStock === true) {
    console.log("Out Of Stock");
} else {
    console.log("In Stock");
}


// Question 4

var ages = [109,
    55, 76, 40, 95
];

for (var i = 0; i < ages.length; i++) {
    var age = ages[i];
    console.log(age);
}




// Question 5

for (var number = 15; number <= 25; number++) {
    console.log(number);
}

// Question 6
for (var number = 15; number <= 25; number++)
    if (
        number === 20
    ) {

        console.log(number);
    }


    // Question 7

var houseHoldMembers = [{
        name: "Ben",
        age: 29,
        keyHolder: true,
    },
    {
        name: "Emily",
        age: 27,
        keyHolder: false,
    },

];
for (var d = 0; d < houseHoldMembers.length; d++) {
    var membersAge = houseHoldMembers[d].age;
    var memberKey = houseHoldMembers[d].keyHolder;
    console.log(membersAge, memberKey)
}

// question 8

function whatDontLike(soda) {
    console.log("i dont like", soda);

}
whatDontLike("dr.pepper");

// Questioin 9

function mathPiece(digit1, digit2) {
    var resultOfDigit = digit1 - digit2;
    console.log(resultOfDigit);
}

mathPiece(8, 5);

// Questioin 10

var emptyArray = [];

function fillArray(text) {
    emptyArray.push(text);
    console.log(emptyArray);
}
fillArray(9);