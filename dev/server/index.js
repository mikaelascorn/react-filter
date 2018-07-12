import faker from 'faker';
import React from "react";

const createUser = () => {
  return {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName()
  }
}
// Try changing this to test your input!
const USER_COUNT = 1000

const users = Array(USER_COUNT)
  .fill('')
  .map(x => createUser())

// This method is for you to edit, create the filtering however you deem necessary.
const FilterUsers = (props) => {

  // let usersArray = [];

  // for(let i = 0; i < users[i].length; i++) {
  //   console.log(users[i]);
  //   let usersObject = {};
    
  //   usersObject = {
  //     firstname: users[i].firstname,
  //     lastname: users[i].lastname
  //   };
  //     usersArray.push(usersObject);
  //   }

    return (
      <div>
        
        <p>{props.users}</p>
        <p>Hello</p>
      </div>
    )
}

console.log(users[1].firstname);
console.log(users[1].lastname);
// console.log(usersArray);
// console.log(faker);
// console.log(filterUsers);
// console.log(faker.name);
console.log(users);

export default FilterUsers
