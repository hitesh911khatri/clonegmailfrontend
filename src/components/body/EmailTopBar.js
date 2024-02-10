import { IconButton } from '@mui/material';
import React from 'react';
import '../css/MailBody.css';
import Checkbox from '@mui/material/Checkbox';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function EmailTopBar({ mailCount }) {
    return (
        <div className='topBar-container'>
            <div className='topBar-left'>
                <Checkbox size='small' />
                <IconButton>
                    <ExpandMoreIcon fontSize='small' />
                </IconButton>
                <IconButton>
                    <RefreshIcon fontSize='small' />
                </IconButton>
                <IconButton>
                    <MoreVertIcon fontSize='small' />
                </IconButton>
            </div>
            <div className='topBar-right'>
                <span>1 - {mailCount} of {mailCount}</span>
                <IconButton>
                    <ChevronLeftIcon fontSize='small' />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon fontSize='small' />
                </IconButton>
            </div>
        </div>
    )
}

export default EmailTopBar