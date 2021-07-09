// Follow along with the examples here


function sayHello() {

    console.log('Hello');
}

sayHello();


function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  } 

  sayHelloToIsabel();

  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  } 

  sayHelloToSofia();

  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  } 

  sayHelloToBrendan();

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log('I was called!');
  } 

  console.log(say("Howdy", "partner")); 