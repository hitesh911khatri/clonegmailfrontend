import React, { useState } from 'react';
import '../css/MailBody.css';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Card, IconButton } from '@mui/material';

function EmailItem({ emailData }) {

    const [star, setStar] = useState(emailData.starred);

    return (
        <Card className='mailItem-container'>
            <Checkbox size='small' />
            <IconButton onClick={() => star ? setStar(false) : setStar(true)}>
                {star ? <StarIcon htmlColor='#f7cb69' /> : <StarOutlineIcon />}
            </IconButton>
            <p className={!emailData.read && 'unread'}>{emailData.from}</p>
            <div className='sub-msg'>
                <p className={!emailData.read && 'unread'}>{emailData.subject}</p>&nbsp;-&nbsp;<span>{emailData.message}</span>
            </div>
            <p className={!emailData.read && 'unread'}>{emailData.time}</p>
        </Card>
    )
}

export default EmailItem