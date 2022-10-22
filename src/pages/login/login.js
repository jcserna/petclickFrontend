import '../../css/login.css';
import React from 'react';
import {useForm } from'react-hook-form';

import axios from 'axios';
import Cookies from 'universal-cookie';
function Login() {

    const cookies = new Cookies();
    const {register, handleSubmit} = useForm();
    
    let url = 'http://localhost:3001/users';
    function conexionDb(db) {
        axios.get(url)
        .then((res)=>{
            for (let index = 0; index < res.data.length; index++) {
                if (res.data[index].username===db.user && res.data[index].password===db.password ) {
                    cookies.set('username', db.user, {path:"/"});
                    cookies.set('id', res.data[index].iduser, {path:"/"})
                    cookies.set('rol', res.data[index].userrol, {path:"/"})
                    if (res.data[index].rol==="clinica") {
                        window.location.href="./clinica";    
                    }else{
                        window.location.href="./home";
                    }
                    
                } 
            }
        },
        (error)=>{
            console.error(error);
        }
        )
    }

    return ( 
        <div className="login">
            <div className="contPubli">
            </div>
            <div className='contForm'>
                <div className='form'>
                    <div className='headerForm'>
                        <div className='logoCont'>
                        
                        </div>
                    </div>
                    <div className='bodyForm'>
                        <form className='formInput' onSubmit={handleSubmit(conexionDb)}>
                            <div className='inputUser'>
                                <p>User</p>
                                <input type="text" {...register('user',{required:true})} />
                            </div>
                            <div className='inputPassword'>
                                <p>Password</p>
                                <input type="password" {...register('password',{required:true})} />
                            </div>
                            <div className='inputButton'>
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                    <div className='footerForm'>
                        <div className='forgetPassword'>
                            <a href="/">ForgetPassword</a>
                        </div>
                        <div className='loginRegister'>
                            <a href="/register">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;