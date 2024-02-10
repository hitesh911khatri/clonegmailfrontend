import React from 'react';
import '../css/BtnsCss.css';
import EditIcon from '@mui/icons-material/Edit';

function Compose() {
    return (
        <div className='compose-btn'>
            <EditIcon fontSize='medium' />
            <p>Compose</p>
        </div>
    )
}

export default Compose