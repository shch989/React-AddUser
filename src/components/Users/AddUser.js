import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return
    }
    if(+enteredAge < 0) {
      return 
    }
    props.onAddUser(enteredUsername, enteredAge);
    // console.log(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value)
  };
  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value)
  };

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong!"/>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id='username' type="text" onChange={usernameChangedHandler} value={enteredUsername}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id='age' type="number" onChange={ageChangedHandler} value={enteredAge}></input>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>

  );
};

export default AddUser;