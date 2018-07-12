import faker from 'faker';
import React from "react";
// import App from "App";

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
// filter the names as the user is searching and pass to the render
const filterUsers = () => {
  let filtering = users.filter(

  );
  console.log(filtering);
  
  return (
    users
  )
}

// console.log(faker);
// console.log(filterUsers);
// console.log(faker.name);
// console.log(users);

export default filterUsers
