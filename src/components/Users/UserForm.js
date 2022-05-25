import styles from './UserForm.module.css';
import React, {useState} from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = props => {
    const [username, setUserName] = useState('');
    const [age, setAge] = useState(null);

    const addUserHandler = event => {
        event.preventDefault();
    }

    const usernameChangeHandler = event => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
    }

    return (
        <Card className={styles['form-control']}>
            <form onSubmit={addUserHandler}>
                <label>Username</label>
                <input type="text" onChange={usernameChangeHandler}/>
                <label>Age</label>
                <input type="number" onChange={ageChangeHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}

export default UserForm;