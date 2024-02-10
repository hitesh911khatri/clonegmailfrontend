import React, { useEffect, useState } from 'react';
import '../components/css/MailPage.css';
import EmailList from '../components/layout/EmailList';
import Header from '../components/layout/Header';
import SideBar from '../components/layout/SideBar';
import SideIcons from '../components/layout/SideIcons';
import { API } from "../global.js"

function checkAuth(data) {
    if (data.status === 401) {
        alert("Unauthorized");
        throw Error("Unauthorized");
    } else {
        return data.json();
    }
}

export function logOut() {
    localStorage.removeItem('token');
    window.location.href = "/";
}

function MailPage() {

    const [emailData, setEmailData] = useState([]);
    const mailCount = emailData.length;

    const getEmailData = () => {
        fetch(`${API}/user/inbox`, {
            method: "GET",
            headers: {
                "x-auth-token": localStorage.getItem("token")
            }
        })
            .then((data) => checkAuth(data))
            .then((mails) => setEmailData(mails))
            .catch((err) => logOut());
    }

    useEffect(() => getEmailData(), []);

    return (
        <div>
            <Header />
            <div className='main-container'>
                <SideBar />
                <EmailList mailCount={mailCount} emailData={emailData} />
                <SideIcons />
            </div>
        </div>
    )
}

export default MailPage
