import React from 'react';
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
import axios, { all } from 'axios';


const CreatePost = () => {
  const [Loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(null)
  const { user } = useContext(AuthContext)
  const { allPost, setAllPost, refetch } = useTimeLineData(user?._id)
  const { register, handleSubmit, reset } = useForm();


  const onsubmit = (data) => {
    setLoading(true)
    const privateUrl = '44c26384eae4023f6064cf342eee9294'
    const formData = new FormData()
    formData.append("image", data?.image[0])

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


        axios.post('https://own-social.onrender.com/api/post/', postInfo).then(response => {
          console.log("console all data")
          refetch()
        })
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
    setPreview(null)
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
                  <img src={user?.img || 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png'} alt="user img" />
                </div>
              </label>
            </Link>
          </div>

        </div>
        <form onSubmit={handleSubmit(onsubmit)} className="relative">

          <textarea
            type="text"
            {...register("description")}
            placeholder="what's on your mind, jasim" className="focus:outline-0 w-full p-6 resize-none" />

          <div className="divider"></div>
          {
            preview && <div className='w-11/12 mx-auto  p-2'>
              <img className='w-full h-64 rounded shadow' src={preview} alt="preview img" />
            </div>
          }
          <div className='flex justify-center pb-16 space-x-6 '>
            <div>

              <label>
                <input
                  type="file"
                  {...register("image", {
                    onChange: (e) => { setPreview(URL.createObjectURL(e.target.files[0])) }
                  })}
                  className="hidden"
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