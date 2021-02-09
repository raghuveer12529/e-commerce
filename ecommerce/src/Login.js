import React, { useState } from 'react'
import './Login.css'
import { Link ,useHistory } from 'react-router-dom'
import {auth} from './firebase'


function Login() {
    const history =  useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        //firbase login
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/');
            })
    }

    const register = e =>{
        e.preventDefault();
        //firbase register
        auth 
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            // console.log(auth);
            history.push('/');
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://picsum.photos/200" />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                    className="login_input" 
                    type="text" 
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                    className="login_input"
                     type="password" 
                     value={password}
                     onChange={e=> setPassword(e.target.value)}
                     />

                    <button 
                    className="login__sign"
                    onClick={signIn}
                    type="submit"
                    >Sign In</button>

                </form>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                <button 
                className="login__register"
                onClick={register}
                >Create your Account</button>
            </div>

        </div>
    )
}

export default Login
