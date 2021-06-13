import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import './Header.css'
import {Link, useHistory} from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Header = ({backButton}) => {
    let history=useHistory()
    return (
        <div className="header">
            {
                backButton?(
                    <IconButton onClick={()=>history.replace(backButton)} >
                        <ArrowBackIosIcon/>
                    </IconButton>            
                )
                :
                (
                <IconButton>
                    <PersonIcon className='header__icon' fontSize='large'/>
                </IconButton>
                )
            }
            
            <Link to='/'>
            <img
            className="header__logo"
            src="https://media-exp1.licdn.com/dms/image/C560BAQHbn-6bAXQP4g/company-logo_200_200/0/1570126074133?e=2159024400&v=beta&t=1c80w5NMsywKLcyRxt7CWJ138x9plCdyLsvVsde_zew" alt="" />
            </Link>
            <Link to='/chat'>
            <IconButton>
            <ForumIcon className='header__icon' fontSize='large'/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
