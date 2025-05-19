import React from 'react'
import From from './components/From/From'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import STATUSES from '../../globals/status/statuses'
import { login } from '../../../store/authSlice'

const Login = () => {
  const {user,status} = useSelector((state)=>state.auth)
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(login(data));
//check the status value
//status -> sucess -> navigate to home page 
    if (status === STATUSES.SUCCESS) {
      return navigate("/");
    } else {
      return navigate("/register");
    }
  };
  return (
   
<From type='Login' user={user} onSubmit={handleLogin}/>

  )
}

export default Login
