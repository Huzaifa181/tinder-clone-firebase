import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon className='header__icon' fontSize='large'/>
            </IconButton>
            <img
            className="header__logo"
            src="https://media-exp1.licdn.com/dms/image/C560BAQHbn-6bAXQP4g/company-logo_200_200/0/1570126074133?e=2159024400&v=beta&t=1c80w5NMsywKLcyRxt7CWJ138x9plCdyLsvVsde_zew" alt="" />
            <IconButton>
            <ForumIcon className='header__icon' fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Header
