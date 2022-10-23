import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty value).'
      })
    return; // 비어있는 정보를 보내주지 않고 바로 return 해줌
    }
    if(+enteredAge < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
    return; // 잘못된 정보를 보내주지 않고 바로 return 해줌
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

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
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