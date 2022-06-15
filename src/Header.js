import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux/es/exports';
import { logout} from './features/userSlice';
import { auth } from './firebase';

function Header() {


  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }



  return (
    <div className='header'>
    

        <div className='header__left'>

            <img src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1655212083~hmac=6c58edfbde4b38a649c2e4aa61fd669a' alt='' />

            <div className='header__search'>
                {/* SearchIcon */}
                <SearchIcon />
                <input placeholder='Search' type='text'/>

            </div>

        </div>

        <div className='header__right'>

            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notications' />
            <HeaderOption avatar={true} title='me' onClick={logoutOfApp} />
            
            
        </div>

    </div>
  )
}

export default Header