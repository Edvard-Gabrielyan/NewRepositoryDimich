import React from 'react';
import { NavLink } from 'react-router-dom';
import './dialog.css';

let DialogItems = (props) => {
    let path = '/dialogs/'+props.id;
    return (
        <div className='dialog'>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

let Message = (props) => {
    return (
        <div className='message'>{props.message}</div>
    )
}

function Dialog () {
    
    let dialogsData = [
        {id:'1', name:'Edvard'},
        {id:'2', name:'Lev'},
        {id:'3', name:'Rosy'},
        {id:'4', name:'Dani'},
        {id:'5', name:'Vlad'},
        {id:'6', name:'Arakel'}
    ]

    let dialogElement = dialogsData.map(dialog => <DialogItems id={dialog.id} name={dialog.name} />);

    let messageData = [
        {message:'Hy!!!!!'},
        {message:'How are you?'},
        {message:'How are you?'}
    ]

    let messageElement = messageData.map(messages => <Message message={messages.message} />)
    return (
        <div className='dialogs'>
            <div className='dialog-items'>
                {dialogElement}
            </div>
            <div className='messages'>
                {messageElement}
            </div>
            
        </div>
    )
}

export default Dialog;