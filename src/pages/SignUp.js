import { Card } from '@mui/material'
import React from 'react';
import '../components/css/Pages.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { API } from '../global';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate();

    const { handleSubmit, values, handleChange } = useFormik({
        initialValues: {
            name: "",
            username: "",
            password: ""
        }, onSubmit: async (values) => {

            const data = await fetch(`${API}/user/signup`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(values),
            });

            if (data.status === 400) {
                alert("Username already exists");
            } else {
                alert("User Registered Successfully!!!");
                navigate("/");
            }
        }
    });

    return (
        <div className='signup-container'>
            <Card className='signup-card'>
                <div className='signup-form'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="google" width={'100px'} />
                    <p className='signup-txt1'>Create your Google Account</p>
                    <p>to continue to Gmail</p><br />

                    <form className='signup-inputs' onSubmit={handleSubmit}>
                        <TextField
                            name="name"
                            label="Enter your fullname"
                            variant="outlined"
                            onChange={handleChange}
                            value={values.name}
                        />
                        <TextField
                            name="username"
                            label="Username"
                            variant="outlined"
                            onChange={handleChange}
                            value={values.username}
                        />
                        <TextField
                            name="password"
                            label="Password"
                            variant="outlined"
                            onChange={handleChange}
                            type='password'
                            value={values.password}
                        />
                        <TextField
                            label="Re-enter password"
                            variant="outlined"
                            type='password'
                        />
                        <Button variant="outlined" type='submit'>Sign Up</Button>
                    </form>

                </div>
                <div className='signup-right'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Google_account_icon.svg/803px-Google_account_icon.svg.png" alt="oneAccount" width={'250px'} />
                    <p>One account. All of Google</p>
                    <p>working for you.</p>
                </div>
            </Card>
        </div>
    )
}

export default SignUp