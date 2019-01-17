// ### Problem 1:
// Put the start of your program in a main function.
// Create a loop that takes user input and put it in an array.
//     Once the user quits, print all items in the array.
//     DO NOT print the array, print the items/elements in the array.

function problem1(){
    var input = [];

    while(enter !== 'q') {
        var enter = prompt('Type anything. Press q to quit.');

        if(enter !== 'q') {
            input.push(enter);
        }


    }
    for(x = 0; x < input.length; x++) {
        console.log(input[x]);
    }
}
problem1();

// function main() {
//
//     var atten = [];
//
//     // for (var x = 1; x <= 5; x++) {
//     while(checkIn !== 'q'){
//         var checkIn = prompt('Is a teacher, student, or parent checking in?');
//
//         switch (checkIn) {
//             case "teacher":
//             case "Teacher":
//                 atten.push("teacher");
//                 // console.log(atten);
//                 console.log("teacher");
//                 break;
//           Old work helps a lot


// ### Problem 2:
// Put the start of your program in a main function.
// Create a function that can translate five English words into Spanish words.
//     You should be able to call your function from your main function.

function problem2() {

    while(span !== 'q'){
        var span = prompt('Enter a word');

    switch(span) {
        case 'dog':
            console.log('perro');
            break;
        case 'cat':
            console.log('gato');
            break;
        case 'frog':
            console.log('rana');
            break;
        case 'mouse':
            console.log('raton');
            break;
        case 'bird':
            console.log('pajaro');
            break;
        default:
            console.log('Word not available.');
    }
    }
}
problem2();


// function main(){
//
//     var expr= prompt("Enter a day of the week");
//
//     switch(expr){
//         case 'Monday':
//         case 'monday':
//             console.log('Lunes');
//             break;
// Can't forget to call it

// ### Problem 3:
// Put the start of your program in a main function.
// Create a program that takes number inputs into an array until a quit word.
//     Afterwards, display all numbers (not the array) and the sum.

function problem3() {

}




// ### Problem 4:
// Put the start of your program in a main function.
// Create a class for Books with name, rating, genre, and author.
//     Create a class method that will function that will change the rating of the book.
//     Create three objects of the class Book and put them in an array.
//     Lastly, use the array to display only the names of the books.

function problem4() {
    class Books{
        constructor(name, rating, genre, author);
    }
}