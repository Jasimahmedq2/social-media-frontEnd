import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const CoverForm = ({ currentUser, user }) => {
  const { register, handleSubmit, reset } = useForm();
  const [previewImage, setPreviewImage] = useState(currentUser?.coverPicture)

  const [hiddenBtn, setHiddenBtn] = useState(false)
  const handlePreviewImage = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]))
    setHiddenBtn(true)
    console.log('handle change data')
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
        const coverPicture = result.data.url
        console.log(coverPicture)
        fetch(`https://own-social.onrender.com/api/user/cover/${user._id}`, {
          method: 'PUT',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({ coverPicture: coverPicture })
        }).then(res => res.json()).then(data => {
          toast.success("updated cover picture")
          setHiddenBtn(false)
        })
      })
  }
  return (
    <div>
      {
        currentUser?._id === user?._id && <form onSubmit={handleSubmit(onsubmit)}>
          <input
            className='background-image text-sm font-bold text-white bg-black  absolute top-5 left-4 '
            {...register('image', { required: true, onChange: (e) => handlePreviewImage(e) })}
            type="file" id="" />
          <button type='submit' className={`btn btn-sm btn-primary absolute right-2 top-2 ${hiddenBtn ? "block" : "hidden"}`}>change save</button>
        </form>
      }

      <div className="bg-cover bg-center h-64 w-full" style={{ backgroundImage: `url(${previewImage || 'https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png'})` }}>
      </div>

    </div>
  );
};

export default CoverForm;