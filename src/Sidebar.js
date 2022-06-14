import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {


    const recentItem = (topic) => {
       return <div className='sidebar__recentItem'>
        
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>

        </div>
    };


  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://images.unsplash.com/photo-1605246811037-7a815fa646e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' alt=''/>
            <Avatar className='sidebar__avatar' />
            <h2>Adesina John</h2>
            <h4>johnkun40@gamil.com</h4>
        </div>
        
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,543</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,448</p>

            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('develop')}
            
        </div>

    </div>
  )
}

export default Sidebar
