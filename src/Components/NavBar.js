import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../Reducers/userReducer';

const NavBar = () => {
    const dispatch = useDispatch();
    const { name } = useSelector(state => state.userInfo.data)
    console.log(name);
    return (
        <div className='nav-container'>

            <h3>{name}</h3>
            <button
                onClick={() => dispatch(logoutUser())}
            >Logout</button>

        </div>
    )
}

export default NavBar