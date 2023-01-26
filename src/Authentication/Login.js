import React from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlinePassword } from 'react-icons/md'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { loginApiCall } from '../context/LoginApiCall';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Loader from '../shared/Loader';
import { ColorRing } from 'react-loader-spinner';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const Login = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
 const navigate = useNavigate()
  const { user, isFetching, dispatch, error } = useContext(AuthContext)

  const onSubmit = (data) => {
    console.log("user info context", user)
    const userinfo = {
      email: data.email,
      password: data.password
    }
    loginApiCall(userinfo, dispatch)
    reset()
  };

  if(user){
    navigate('/')
  }
  let errorMessage;
  if(error){
     errorMessage = <p className='text-red-400 text-sm font-bold'>{error?.message}</p>
  }

  const loader = <ColorRing
  visible={true}
  height="20"
  width="20"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>

  return (
    <div className='py-12 h-screen'>
      <div className=' bg-base-100 shadow-xl rounded w-1/2 mx-auto  relative'>
        <div className='py-6'>
          <h3 className='text-2xl font-bold text-center'>LogIn</h3>
        </div>
        <div className='divider'></div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className='w-11/12 mx-auto space-y-2'>
            <div className='flex items-center rounded space-x-2 bg-gray-200 border border-1 py-2'>
              <AiOutlineMail className='text-4xl text-blue-400' />
              <input
                {...register("email")}
                className='focus:outline-0 text-2xl px-2 w-full py-2 bg-gray-200'
                type="email"
                placeholder='enter your email'
                required
              />
            </div>
            <p className='text-red-400 text-sm font-bold'>{errors.email?.message}</p>
          </div>

          <div className='w-11/12 mx-auto space-y-2'>
            <div className='flex items-center rounded space-x-2 bg-gray-200 border border-1 py-2'>
              <MdOutlinePassword className='text-4xl text-blue-400' />
              <input
                {...register("password")}
                className='focus:outline-0 text-2xl px-2 w-full py-2 bg-gray-200'
                type="password"
                placeholder='password'
              />
            </div>
            <p className='text-red-400 text-sm font-bold'>{errors.password?.message}</p>
          </div>

          {errorMessage}
          
          <button type="submit" className='btn btn-sm btn-outline absolute right-2 bottom-2'>{isFetching ? loader : 'LOGIN'}</button>

        </form>
        <div className='py-12 px-6'>
          <h4 className='text-sm space-x-2 font-bold'>New to own social? <Link className='link text-sm text-primary' to="/signup">Sign Up</Link></h4>
        </div>
      </div>
    </div>
  );
};

export default Login;