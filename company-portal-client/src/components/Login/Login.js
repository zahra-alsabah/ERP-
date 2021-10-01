import React from "react";
import { useState } from "react";
import "./Login.css"
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [counter,setCounter] = useState(1)
    const [loggedIn,setLoggedIn] = useState(false)

    const refresh = ( ) => {
      setCounter(counter+1)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
        console.log("here",email,password)
        axios.post('http://localhost:5000/api/auth',{
          email,
          password
      }).then(res=>{
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('user',JSON.stringify(res.data.user))
        localStorage.setItem('loggedIn',"true")
        window.location = "http://localhost:3000/profile/"+res.data.user._id
      })
      .catch(err => console.log("error"))
    }


      return (
        <div className="login-page">
          <form className="login-form" onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
    
  
};

export default Login;
