import React,{useState} from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar';
const ChatScreen = () => {
    const [message, setMessage]= useState([
        {
            name:'Huzaifa',
            image:'https://media-exp1.licdn.com/dms/image/C560BAQHbn-6bAXQP4g/company-logo_200_200/0/1570126074133?e=2159024400&v=beta&t=1c80w5NMsywKLcyRxt7CWJ138x9plCdyLsvVsde_zew',
            message:'How are you',
        }
    ])

    return (
        <div className='chatscreen'>
            <p className='chatscreen__timestamp'>
                You matched with Elen
            </p>
            {message.map(mssg=>{
                return(
                    mssg.name?
                        <div className='chatscreen__message'>
                            <Avatar className='chatscreen__image' src={mssg.image}/>
                            <p className='chatscreen__text'>{mssg.message}</p>
                        </div>
                    :
                    <div className='chatscreen__message'>
                    <p className='chatscreen__textUser'>{mssg.message}</p>
                </div>        
                
                )
            })}
        </div>
    )
}

export default ChatScreen
