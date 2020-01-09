var person1 = {name: 'John', Age: 25};

for (let key in person1) {
  let value = person1[key];

  Object.defineProperty(person1, key,{
    get: function() {
      console.log('Getting' + value);
      return value;
    },
    set: function(newValue) {
      console.log('Setting' + newValue);
      value = newValue;
      return value;
    },
  });
}

console.log(person1.name);
person1.name = '1';
