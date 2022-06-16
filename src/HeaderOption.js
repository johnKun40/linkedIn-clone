import { Avatar } from '@material-ui/core';
import React from 'react'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux/es/exports';
import './HeaderOption.css'

function HeaderOption({avatar, Icon, title, onClick }) {


  const user = useSelector(selectUser)

  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption__icon' />}
        {avatar && (
            <Avatar title='logout' src={user?.photoUrl} className='headerOption__icon'>{user?.email[0]}</Avatar>
        )}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}

export default HeaderOption