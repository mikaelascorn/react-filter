import faker from 'faker';
import React from "react";

const createUser = () => {
  return {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName()
  }
}
// Try changing this to test your input!
const USER_COUNT = 10

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

    // props.users(usersArray)
  props.users(users)
  return null
}

export default FilterUsers
