import React from 'react'
import From from './components/From/From'
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../../../store/authSlice";
import { useNavigate } from 'react-router-dom';
import STATUSES from '../../globals/status/statuses';
const Register = () => {
  const {status} = useSelector((state)=>state.auth)
  const navigate = useNavigate()
  
  const dispatch = useDispatch()
  const handleRegister = (data)=>{
    dispatch(register(data))

    if(status === STATUSES.SUCCESS){
      return navigate("/login")
    }else{
      return navigate("/register")
    }
  }
  return <From type="Register" onSubmit={handleRegister} />;
}

export default Register
