var Person = function(firstName, lastName) {
    let somePrivateStuff = "foo"; // this variable is protected from being accessed outside

    // attributes
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        console.log("can access inner variables here", somePrivateStuff);
        return this.firstName + " " + this.lastName;
    }
}

let martin = new Person("Martin", "Lowa");

console.log("can't access inner variables", martin.somePrivateStuff);
martin.fullName();
let saul = new Person("Saul", "Samuel");

console.log("Martin's fullName function doesn't have any attributes yet", martin.fullName.boo);
console.log("Saul's fullName function doesn't have any attributes yet", saul.fullName.boo);

// since we can assign attributes to anything in Javascript...
martin.fullName.boo = "foo";
saul.fullName.boo = "bar";

// both objects have unique instances of "name" function
console.log("Martin's fullName function is different than Saul's", martin.fullName.boo);
console.log("Saul's fullName function is different than Martin's", saul.fullName.boo);
