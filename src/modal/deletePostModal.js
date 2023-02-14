import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import useTimeLineData from '../Hooks/useTimeLineData';

const DeletePostModal = ({ deletePostModal, setDeletePostModal, user }) => {
  const {refetch} = useTimeLineData(user?._id)
  const handleDeletePost = async () => {

    try {

      const response = await axios.delete(`https://own-social.onrender.com/api/post/${deletePostModal?._id}?userId=${user._id}`)

      if (response.status === 200) {
        toast.success('successfully deleted the post', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        refetch()
        console.log(response, "response here")
      }  

    } catch (error) {
      console.log(error)
    }
    setDeletePostModal(null)

  }

  return (
    <div>
      <input type="checkbox" id="delete-post-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">you are sure delete this post?</h3>
          <p className="py-4">{deletePostModal?.description}</p>
          <div className='p-2 rounded-lg'>
            <img style={{ maxHeight: '25rem', width: '100%' }} src={deletePostModal?.img} alt="" />
          </div>
          <div className="modal-action">
            <label htmlFor="delete-post-modal" className="btn">No</label>
            <label onClick={handleDeletePost} htmlFor="delete-post-modal" className="btn">Yes</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePostModal;