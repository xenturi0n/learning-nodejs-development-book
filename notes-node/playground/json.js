var obj = {
    name: 'Alfonso'
}

var stringObj = JSON.stringify(obj);

var personString = '{"name": "Andrew", "age":25}';
var person = JSON.parse(personString);

console.log(typeof(person));
console.log(person.age);
console.log('*************');
console.log(typeof(personString));
console.log(personString.age);