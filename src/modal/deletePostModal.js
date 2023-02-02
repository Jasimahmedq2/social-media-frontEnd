import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeletePostModal = ({ deletePostModal, setDeletePostModal, refetch, user }) => {
  console.log("refetch", refetch)
  const handleDeletePost = async (id) => {

    try {

      const response = await axios.delete(`https://own-social.onrender.com/api/post/${id}?userId=${user._id}`)
      console.log("response", response.status)
      refetch()
      setDeletePostModal(null)

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

      }

    } catch (error) {
      console.log(error)
    }


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
            <label onClick={() => handleDeletePost(deletePostModal?._id)} htmlFor="delete-post-modal" className="btn">Yes</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePostModal;