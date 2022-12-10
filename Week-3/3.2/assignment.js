/*  
Call: call invokes the function and allows you to pass arguments one by one

Apply: Apply invokes the function and allows you to pass arguments as an array

Bind: Bind returns a new function, allowing you to pass in a this array and any number of arguments.

 */

 

var person1 = {firstName: 'Raju', lastName: 'king'};
var person2 = {firstName: 'chandu', lastName: 'shekar'};

function greet(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
function greet2(greeting) {
        console.log( 'Hello ' + this.firstName + ' ' + this.lastName);
    }


greet.call(person1, 'Hello'); // Hello Raju king
greet.call(person2, 'Hello'); // Hello chandu shekar



greet.apply(person1, ['Hello']); // Hello Raju king
greet.apply(person2, ['Hello']); // Hello chandu shekar

var greetRaju = greet2.bind(person1);
var greetChandu = greet2.bind(person2);

greetRaju(); // Hello Raju king
greetChandu(); // Hello chandu shekar