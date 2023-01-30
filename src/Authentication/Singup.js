import React from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlinePassword } from 'react-icons/md'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const schema = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup.string()
  .required()
  .oneOf([yup.ref('password')], 'password does not match'),
});

const Singup = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    console.log(data,"data")

    const userInfo = {
      username: data.name,
      email: data.email,
      password: data.password
    }

    try {
      await axios.post('https://own-social.onrender.com/signup', userInfo)
      navigate('/login')
    } catch (error) {
      console.log('error', error.message)
    }
    reset()
  };
  return (
    <div className='py-12 h-screen'>
      <div className=' bg-base-100 shadow-xl rounded w-1/2 mx-auto  relative'>
        <div className='py-6'>
          <h3 className='text-2xl font-bold text-center'>Sing Up</h3>
        </div>
        <div className='divider'></div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <div className='w-11/12 mx-auto space-y-2'>
            <div className='flex items-center rounded space-x-2 bg-gray-200 border border-1 py-2'>
              <MdOutlineDriveFileRenameOutline className='text-4xl text-blue-400' />
              <input
                {...register("name")}
                className='focus:outline-0 text-2xl px-2 w-full py-2 bg-gray-200'
                type="text" name="name"
                placeholder='username'
              />
            </div>
            <p className='text-red-400 text-sm font-bold'>{errors.name?.message}</p>
          </div>

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
                placeholder='write a strong password'
              />
            </div>
            <p className='text-red-400 text-sm font-bold'>{errors.password?.message}</p>
          </div>

          <div className='w-11/12 mx-auto space-y-2'>
            <div className='flex items-center rounded space-x-2 bg-gray-200 border border-1 py-2'>
              <MdOutlinePassword className='text-4xl text-blue-400' />
              <input
                {...register("confirmPassword")}
                className='focus:outline-0 text-2xl px-2 w-full py-2 bg-gray-200'
                type="password"
                placeholder='confirm password'
              />
            </div>
            <p className='text-red-400 text-sm font-bold'>{errors.confirmPassword?.message}</p>
          </div>

          <input type="submit" value="Sing Up" className='btn btn-sm btn-outline absolute right-2 bottom-2' />

        </form>
        <div className='py-12 px-6'>
          <h4 className='text-sm space-x-2 font-bold'>Already have A Account? <Link className='link text-sm text-primary' to="/login">Log In</Link></h4>
        </div>
      </div>
    </div>
  );
};

export default Singup;