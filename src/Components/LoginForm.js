import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../Reducers/userReducer'
// import { loginUser } from '../Reducers/userReducer';

const LoginForm = () => {
    // const { name } = useSelector(state => state.userInfo.data)

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    function userLogin() {
        const userData = {
            name: name,
            password: password
        }
        console.log(userData);
        dispatch(loginUser(userData))
    }

    return (
        <div className='user-container'>
            <h1>Login Page</h1>
            <input
                type='text'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}


            />
            <button className='login-btn'
                onClick={userLogin}
            >Login</button>
        </div>
    )
}

export default LoginForm