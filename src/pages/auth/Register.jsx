import React, { useEffect } from 'react'
import From from './components/From/From'
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../../../store/authSlice";
import { useNavigate } from 'react-router-dom';
import STATUSES from '../../globals/status/statuses';
import { setStatus } from '../../../store/authSlice';
const Register = () => {
  const {status} = useSelector((state)=>state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleRegister = (data)=>{
    dispatch(register(data))
  }
  
    
    useEffect(() => {
      if (status === STATUSES.SUCCESS) {
        navigate('/login');
        dispatch(setStatus(null));
      }
    }, [status]);
    
  return <From type="Register" onSubmit={handleRegister} />;
}

export default Register
