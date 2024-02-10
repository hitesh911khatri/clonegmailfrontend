import React from 'react'
import EmailItem from '../body/EmailItem';
import EmailTopBar from '../body/EmailTopBar';
import '../css/MailBody.css';

function EmailList({ mailCount, emailData }) {

    return (
        <div className='body-container'>
            <EmailTopBar mailCount={mailCount} />
            <div className='emails-container'>
                {emailData.map((emailData, index) => (
                    <EmailItem key={index} emailData={emailData} />
                ))}
            </div>
        </div>
    )
}

export default EmailList