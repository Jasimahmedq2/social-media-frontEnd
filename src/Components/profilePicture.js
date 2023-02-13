import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillFolderAdd } from 'react-icons/ai';
import { toast } from 'react-toastify';


const ProfilePicture = ({ currentUser, user }) => {
  const { register, handleSubmit, reset } = useForm();
  const [previewImage, setPreviewImage] = useState(currentUser?.profilePicture)

  const [hiddenBtn, setHiddenBtn] = useState(false)

  const handlePreviewImage = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]))
    setHiddenBtn(true)
  }

  const onsubmit = (data) => {
    const img = data?.image[0]
    const url = '44c26384eae4023f6064cf342eee9294'
    const formData = new FormData()
    formData.append('image', img)

    fetch(`https://api.imgbb.com/1/upload?key=${url}`, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(result => {
        const profilePicture = result.data.url
        fetch(`http://localhost:9000/api/user/profile/${user._id}`, {
          method: 'PUT',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({ profilePicture: profilePicture })
        }).then(res => res.json()).then(data => {
          console.log(data)
          toast.success("updated user profile picture")
          setHiddenBtn(false)
        })
      })
  }
  return (
    <div>

      <div className=" w-1/2 mx-auto relative">

        <div className='space-y-2'>
          <div class="w-56 h-52 rounded-full overflow-hidden">
            <img src={previewImage || 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png'} alt="profile" />
          </div>
          <div class="ml-12 font-medium text-lg">{currentUser?.username}</div>
        </div>

        <form onSubmit={handleSubmit(onsubmit)}>

          <label className=" rounded-md cursor-pointer text-white absolute -top-2 left-0   z-20">
            <input type="file"
              {...register('image', { required: true, onChange: (e) => { handlePreviewImage(e) } })}
              className="hidden" />
            <span><AiFillFolderAdd className='text-6xl text-secondary' /></span>
          </label>
          <button type='submit' className={`btn btn-sm btn-primary absolute right-2 top-2 ${hiddenBtn ? "block" : "hidden"}`}>change save</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePicture;