'use strict';

function ages(people) {
  const result = {};

  for (const name in people) {
    const person = people[name];
    result[name] = person.died - person.born;
  }

  return result;
}

const people = {
  'Леся Українка': { born: 1871, died: 1913 },
  'Іван Франко': { born: 1856, died: 1916 },
  'Ольга Кобилянська': { born: 1863, died: 1942 }
};

console.log(ages(people));