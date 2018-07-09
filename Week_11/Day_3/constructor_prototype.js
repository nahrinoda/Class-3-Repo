/*
Prototypes allows us to "inherit" attributes for object types
Array objects inherit from Array.prototype
String objects inherit from String.prototype
Boolean objects inherit from Boolean.prototype
Date objects inherit from Date.prototype
... etc
even applies for custom types! So:
Person objects inherit from Person.prototype
...
All types (Array, String, custom types like Person, etc) inherit from Object.prototype
*/

// equivalent to above
var Person = function(firstName, lastName) {
    let somePrivateStuff = "foo"; // this variable is protected from being accessed outside

    // attributes
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function(name) {
    this.name = name;
    console.log(somePrivateStuff); // Error: can't access private variables
}
Person.prototype.someOtherAttr = [];

let martin = new Person("Martin");
martin.setName("Martinez");

let saul = new Person("Saul");
saul.setName("Sal");

console.log("Martin", martin.setName.boo);
console.log("Saul", saul.setName.boo);

martin.setName.boo = "foo";
saul.setName.boo = "bar";

// both objects have the same instance of "setName" function
console.log("Martin", martin.setName.boo);
console.log("Saul", saul.setName.boo);
