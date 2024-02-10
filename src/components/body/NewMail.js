import * as React from 'react';
import '../css/BtnsCss.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { API } from '../../global';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 14,
    p: 4,
};

export default function NewMail() {
    const [open, setOpen] = React.useState(false);
    const [recipient, setRecipient] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSend = async() => {
    
            const messageData = {
                recipient: recipient,
                subject: subject,
                message: message
            };
            // console.log('Sending message to backend:', { recipient, subject, message });
            console.log('Sending message to backend:', messageData);
            console.log(API)
           const data= await fetch(`${API}/user/inbox`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(messageData),
            })
            
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to send message');
                    
                }
                // Handle success
                console.log('Message sent successfully');
                alert("Message successfully sent")
                // Example: Close the modal after sending
                handleClose();
            })
            .catch(error => {
                // Handle error
                console.log('Error sending message:', error);
            });

            console.log(data);
        
        
        // Here you can perform actions to send the message to the backend
      
        // Example of resetting form fields after sending
        setRecipient('');
        setSubject('');
        setMessage('');
        handleClose(); // Closing the modal after sending
    };


    return (
        <div>
            <div className='compose-btn' onClick={handleOpen}>
                <EditIcon fontSize='medium' />
                <p>Compose</p>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='newMail-container'>
                        <div className='newMail-head'>New Message</div>
                        <div className='newMail-inputs'>
                            <TextField className='receiptant' label="Receiptant" variant="standard" />
                            <TextField className='subject' label="Subject" variant="standard" />
                            <TextField className='message' label="Message" multiline rows={8} />
                        </div><br />
                        <Button variant="contained">Send</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
