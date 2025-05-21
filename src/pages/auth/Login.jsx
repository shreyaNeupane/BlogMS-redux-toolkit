import React, { useEffect } from 'react'
import From from './components/From/From'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import STATUSES from '../../globals/status/statuses'
import { login } from '../../../store/authSlice'
import { setStatus } from '../../../store/authSlice'

const Login = () => {
  const {user,status} = useSelector((state)=>state.auth)
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(login(data));

  }
  useEffect(()=>{
    //check the status value
    //status -> sucess -> navigate to home page
    if (status === STATUSES.SUCCESS) {
       navigate("/")
      dispatch(setStatus(null))
    } 
  },[status])
  return (
   
<From type='Login' user={user} onSubmit={handleLogin}/>

  )
}

export default Login
