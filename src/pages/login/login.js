import '../../css/login.css';
import React from 'react';
import {useForm } from'react-hook-form';
function Login() {

    const {register, handleSubmit} = useForm();
    let url = 'https://petclick-db.herokuapp.com/users';

    function conexionDb(db) {
        fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
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
                        <form className='formInput' onSubmit={ handleSubmit(conexionDb)}>
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
                        <div className='register'>
                            <a href="/">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;