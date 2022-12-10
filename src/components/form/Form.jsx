import React from "react";
import { validation } from "./validation";
import styles from "./Form.module.css";

export default function Form(props){
    const [userData, setUserData] = React.useState({
        username:'', password:'',
});

const [errors, setErrors] = React.useState({
    username:'', password:'',
});


function handleInputChange(e){
    setUserData({...userData, [e.target.name]: e.target.value})
    setErrors(validation({...userData, [e.target.name]: e.target.value}))
};

const handleSubmit = (e) => {
e.preventDefault()
props.login(userData)
}
    return <div className={styles.form}> <form onSubmit={handleSubmit}>
        <img className={styles.img} alt={props.name} src = "https://occ-0-3011-116.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABekq6ls-CBjbe3pOnTRope5_lgtkCzudQpgHjtxet5a6QpfFClMngMFpyEbCPmrONnPnmHJHVAcarJBMLUy9KqCtfzYXEA0hFbeQ.png?r=d7f"/>
        <br/>
        <br/>
        <label htmlFor="username:">Username: </label>
        <br/>
        <input
        id="username"
        name="username"
        placeholder="Nombre de Usuario"
        type='text'
        value={userData.username}
        onChange= {handleInputChange}
        />
        <br/>
        <br/>
        <label htmlFor="password:">Password: </label>
        <br/>
        <input
        id="password"
        name="password"
        type="password"
        value={userData.password}
        onChange={handleInputChange}
        />
        <br/>
        <p> {errors.username}</p>
        <p>{errors.password}</p>
    
        <input type = "submit"/>
        </form></div>
}