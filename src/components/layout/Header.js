import React from 'react';
import '../css/Header.css';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logOut } from '../../pages/MailPage';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

function Header() {
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <div className='menu-icon'>
                    <IconButton><MenuIcon /></IconButton>
                </div>
                <div className='gmail-logo'>
                    <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' alt="gmail logo" />
                </div>
            </div>
            <div className='search-container'>
                <div className='search-bar'>
                    <SearchIcon />
                    <input type="text" name="search" placeholder='Search mail' />
                    <TuneIcon />
                </div>
            </div>
            <div className='icons-container'>
                <IconButton><HelpOutlineIcon /></IconButton>
                <IconButton><SettingsIcon /></IconButton>
                <IconButton><AppsIcon /></IconButton>
                <IconButton onClick={() => logOut()}>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>GM</Avatar>
                </IconButton>
            </div>
        </div>
    )
}

export default Header