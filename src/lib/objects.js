const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  let result = people.map(person => person.age);
  return result;
};

const findByName = (name, people) => {
  let person = people.find(obj => obj.name === name);
  return person;
};

const findHondas = cars => {
  let hondas = cars.filter(obj => obj.manufacturer === 'Honda');
  return hondas;
};

const averageAge = people => {
  return people.reduce((prev, people) => prev + people.age, 0) / people.length; 
};

const createTalkingPerson = (name, age) => {
  function introduce(strangersName) {
    return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
  }
  return {
    name: name,
    age: age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    }
  };
  };

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
