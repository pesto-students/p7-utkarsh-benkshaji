const Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.age = age;
    this.name = name;
}

function Teacher() {};

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.teach = function(subject) {
    this.subject = subject;
    return `${this.name} is now teaching ${this.subject}`;
};

const professor = new Teacher();

professor.initialize("Vihay", 45);
console.log(professor.teach('Inheritance'));