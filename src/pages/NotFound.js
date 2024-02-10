import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {

    const navigate = useNavigate();

    return (
        <div>
            <img src="https://media.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif" alt="404-Error" />
            <Button variant='contained' onClick={() => navigate('/')}>click for home page</Button>
        </div>
    )
}

export default NotFound