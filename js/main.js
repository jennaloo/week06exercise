////////////////var testOne = "What kind of variable am I?"
//////////////////string
////////////////
////////////////var testTwo = 256;
//////////////////number
////////////////
////////////////
////////////////var testThree = false;
//////////////////boolean
////////////////
////////////////var testFive = '128';
//////////////////string
////////////////
////////////////
////////////////var testSix = "";
//////////////////string
//////////////
//////////////var testOne = "hello" + "there";
////////////////string
//////////////
//////////////var testTwo = '100' + 28;
////////////////string
//////////////
//////////////var testThree = true + 3;
////////////////number, 4
//////////////
//////////////var testFour = 'false' + 5;
////////////////string, false5
//////////////
//////////////var testFive = '128' - 3;
////////////////number 125
//////////////
//////////////var testSix = "" * 9;
////////////////didn't expect....0
//////////////
//////////////var testSeven = 'zero' - 1;
////////////////NaN
//////////////
//////////////var testEight = 'five'.length;
////////////////number, 4
//////////////
//////////////var testNine = 'five' [0] + 'ever';
////////////////string, fever
//////////////
//////////////var testTen = 'a' > 'b';
////////////////js has ability to order alphabetically?
//////////////
//////////////var testEleven = 'number'.length < 7;
////////////////boolean, true
//////////////
//////////////var testTwelve = '12' == 12;
////////////////boolean, true
//////////////
//////////////var testThirteen = 'twelve' == 12;
////////////////boolean false
//////////////
//////////////var testFourteen = '14' === 14;
////////////////boolean, false
//////////////
//////////////var testFifteen = 'Hi There' [0] + 'open sesame' [2] + 'alohamora' [1] + 'eulalia' [4] + 'harkonnen' [4] + 'BATMAN!' [6];
////////////////string hello!
//////////
////////////var string1 = "hello, ";
////////////var string2 = "my name is ";
////////////var string3 = "Kingsley Pappageorgio.";
////////////var combinedStrings = string1 + string2 + string3;
////////////console.log(combinedStrings);
////////////// should say hello, my name is Kingsley Pappageorgio."
//////////
//////////
////////////var num1 = 8;
////////////var num2 = 52;
////////////var num3 = 60;
////////////var combinedNumbers = num1 + num2 + num3;
////////////console.log(combinedNumbers);
////////////should be 120.
//////////
//////////var mixedNum1 = 10;
//////////var mixedString1 = "ten";
//////////var mixedNum2 = "10";
//////////var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;
//////////console.log(mixedConcatenation);
////////////should say... "1010ten"
////////
//////////10.
////////
////////var num4 = 5;
////////var num5 = 0;
////////
////////if (num4 > 1) {
////////    console.log("Num4 is greater than 1")
////////} else {
////////    console.log("Num4 is NOT greater than 1.");
////////}
//////////should print out ... Num4 is greater than 1.
//////
//////
////////11.
//////var num4 = 5;
//////var num5 = 0;
//////if (num4 < num5 || num4 === num5) {
//////    console.log("If statement ran!")
//////} else if (num5 === "0" || true) {
//////    console.log("Else if statement ran!")
//////} else {
//////    console.log("Else statement ran!");
//////};
//////
////////should run the else if because of the || true.
////////yup.
//////
////
////var string1 = "this is a string";
////for (var i = 0; i < string1.length; i = i + 1) {
////    console.log(i, string1[i]);
////};
//////logs each letter by its order with the loop number 
////
//
//var string2 = "coding";
//var total = 0;
//
//for (var i = 0; i < string2.length; i++) {
//    total = total + i;
//};
//
//console.log(total);
////15
//

//This Searches and extacts all the o's!
//var string3 = "onomatopoeia";
//for (var i = 0; i < string3.length; i++) {
//    if (string3[i] == "o") {
//        console.log(i, string3[i]);
//    };
//};
//could be used to solve further problems


////*******this is solution to future problem
//var string4 = "You're gonna need a bigger boat.";
//
//for (var i = 0; i < string4.length; i++) {
//    if (string4[i] == "a" || string4[i] == "e" || string4[i] == "i" || string4[i] == "o" || string4[i] == "u") {
//        console.log(string4[i]);
//    }
//}
//
//function testStuff(a, b) {
//    if (a > 25 && b < 100) {
//        console.log(a + " is greater than 25 and " + b + " is less than 100")
//    } else {
//        console.log(a + " is NOT greater than 25 or " + b + " is NOT less than 100");
//    };
//};
//
//testStuff(10, 101);
////testStuff(26, 99);
////testStuff(100, 25);
//
//function testStuff2(c, d) {
//    if (c == 25) {
//        return c + " is equal to 25";
//    } else if (d <= 100) {
//        d + " is less than or equal to 100";
//    } else {
//        return "Neither if nor else if statement ran"
//    }
//};
//
//testStuff2(26, 101);
////neither ran
//testStuff2(25, 99);
////if ran
//testStuff2(102, 24);
////else if ran

function countVowels(someString) {
    var vowels = 0;

    for (var i = 0; i < someString.length; i++) {
        if (someString[i] == "a" || someString[i] == "e" || someString[i] == "i" || someString[i] == "o" || someString[i] == "u") {
            vowels++;
        }
    }

    return vowels;
}
