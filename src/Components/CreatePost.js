import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { AiFillTag } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import useTimeLineData from '../Hooks/useTimeLineData';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
  description: yup.string().max(500),
});

const CreatePost = () => {
  const [Loading, setLoading] = useState(false)

  const { user } = useContext(AuthContext)
  const { data, refetch } = useTimeLineData(user?._id)
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });


  const uploadPost = (data) => {
    setLoading(true)
    const img = data?.img[0]
    const privateUrl = '44c26384eae4023f6064cf342eee9294'
    const formData = new FormData()
    formData.append('image', img)

    fetch(`https://api.imgbb.com/1/upload?key=${privateUrl}`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {

        const postInfo = {
          userId: user?._id,
          description: data?.description || "",
          img: result?.data?.url || ""
        }

        fetch('https://own-social.onrender.com/api/post/', {
          method: 'post',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(postInfo)
        })
          .then(res => res.json())
        refetch()
        setLoading(false)
        toast.success(`hey  ${user?.username} your post created successfully`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
    reset()

  }
  const loader = <ColorRing
    visible={true}
    height="30"
    width="40"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />

  return (
    <div className="pt-12">
      <div className="card w-full bg-white shadow-xl">
        <div className="">

          <div style={{ marginTop: '-2rem' }} className="flex justify-center  items-center space-x-2 p-2 rounded-lg">
            <Link to={`/profile/${user?._id}`}>
              <label className="btn  btn-circle avatar">
                <div className="w-12 rounded-full">
                  <img src={user?.img} alt="user img" />
                </div>
              </label>
            </Link>
          </div>

        </div>
        <form onSubmit={handleSubmit(uploadPost)} className="relative">

          <textarea
            {...register("description")}
            type="text" placeholder="what's on your mind, jasim" className="focus:outline-0 w-full p-6 resize-none" />

          <p className='text-red-400 text-sm'>{errors?.description?.message}</p>

          <div className="divider"></div>

          <div className='flex justify-center pb-16 space-x-6 '>
            <div>

              <label>
                <input
                  type="file"
                  {...register("img")}
                  className='hidden'
                />
                <span className='text-4xl hover:cursor-pointer'><HiOutlinePhotograph className='text-blue-400' /></span>
              </label>


            </div>
            <span className='text-4xl'><CiLocationOn /></span>
            <span className='text-4xl'><AiFillTag /></span>
          </div>
          <button
            className='btn btn-accent text-2xl absolute left-0 right-0 bottom-0' type="submit">{Loading ? loader : "post"}</button>
        </form>

      </div>
    </div>
  );
};

export default CreatePost;