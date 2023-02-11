import axios from 'axios';
import React, { useReducer } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdatePostModal = ({ updatePostModal, setUpdatePostModal, refetch, user }) => {
  const [description, setDescription] = useState(updatePostModal?.description)



  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {

    try {

      const response = await axios.put(`http://localhost:9000/api/post/${updatePostModal?._id}`, {
        userId: user._id,
        description: data?.description
      })

      setUpdatePostModal(null)

      if (response.status === 200) {
        
        toast.success('successfully updated the post', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        refetch()
      }

    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div>
      <input type="checkbox" id="update-post-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label htmlFor="update-post-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

          <h3 className="font-bold text-lg">update the post?</h3>
          <p className="py-4">{updatePostModal?.description}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea {...register("description")} className='textarea textarea-accent w-full resize-none ' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>


            <div className="modal-action">

              <input
                htmlFor="update-post-modal" className="btn"
                type="submit" value="submit" disabled={updatePostModal?.description === description} />

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePostModal;