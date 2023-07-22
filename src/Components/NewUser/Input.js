import React from "react";
import "./Input.css";
import Card from "../UI/Card";
import classes from '../UI/Card.module.css'

const AddUser = props => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <><Card className={classes.input}></Card>
    <form onSubmit={AddUserHandler} className='box'>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form></>
  );
};
export default AddUser;
