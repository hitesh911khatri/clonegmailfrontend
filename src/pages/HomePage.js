import { Card } from '@mui/material';
import React from 'react';
import '../components/css/Pages.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { API } from '../global';




function HomePage() {


    const navigate = useNavigate();

    const { handleSubmit, values, handleChange } = useFormik({
        initialValues: {
            username: "",
            password: ""
        }, onSubmit: async (values) => {

            const data = await fetch(`${API}/user/signin`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(values),
            });

            if (data.status === 401) {
                alert("Invalid Username or Password");
            } else {
                const result = await data.json();
                localStorage.setItem('token', result.token);
                navigate("/inbox");
            }
        }
    });

    return (
        <div className='home-container'>
            <div>
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" alt="welcome" width={'500px'} />
            </div>
            <Card className='sigin-container'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="google" width={'100px'} />
                <p className='sigin-txt1'>Sign in</p>
                <p>to continue to Gmail</p><br />

                <form className='sigin-inputs' onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        onChange={handleChange}
                        name="username"
                        value={values.username}
                    />
                    <TextField
                        label="Enter your password"
                        variant="outlined"
                        onChange={handleChange}
                        name="password"
                        value={values.password}
                        type="password"
                    />
                    <Button variant="contained" type='submit'>Submit</Button>
                </form>

                <br /><hr /><br />
                <Button onClick={() => navigate("/signup")}>Create Account</Button>
                <br />
            </Card>
        </div>
    )
}

export default HomePage
