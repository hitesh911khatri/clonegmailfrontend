import React from 'react';
import '../css/SideBar.css';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LabelIcon from '@mui/icons-material/Label';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/Inbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import NewMail from '../body/NewMail';

function SideBar() {
    return (
        <div className='sidebar-container'>
            <div className='compose-container'>
                <NewMail />
            </div>
            <div className='sidebar-btns'>
                <div>
                    <InboxIcon /> Inbox
                </div>
                <div>
                    <StarOutlineIcon /> Starred
                </div>
                <div>
                    <WatchLaterOutlinedIcon /> Snoozed
                </div>
                <div>
                    <LabelImportantIcon /> Important
                </div>
                <div>
                    <SendOutlinedIcon /> Sent
                </div>
                <div>
                    <InsertDriveFileOutlinedIcon /> Drafts
                </div>
                <div>
                    <LabelOutlinedIcon /> Categories
                </div>
                <div>
                    <ExpandMoreIcon /> More
                </div>
            </div>
            <div className='labels-container'>
                <div className='label-head'>
                    <span>Labels</span>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </div>
                <div className='label-btns'>
                    <div><LabelIcon /> [GMAIL]/Sent Mail</div>
                    <div><LabelIcon /> Notes</div>
                    <div><LabelIcon /> Personal</div>
                    <div><ExpandMoreIcon /> More</div>
                </div>
            </div>
        </div>
    )
}

export default SideBar