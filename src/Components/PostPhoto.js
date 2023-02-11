import React from 'react';
import useUserPost from '../Hooks/useUserPost';

const PostPhoto = ({currentUser}) => {
  const [userPost] = useUserPost(currentUser?._id)
  const PostPhoto = userPost.filter(uPhoto => uPhoto.img !== "")
  console.log("userPost", userPost)
  return (
    <div className='space-y-4'>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p className='text-xl font-bold'>photos <span className='text-primary text-xl'>-----</span> {PostPhoto?.length}</p>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2'>
        {
          PostPhoto?.slice(0, 9).map(post => {
            return (
              <div className="avatar">
                <div className="w-32 rounded">
                  <img src={post?.img} alt="post img" />
                </div>
              </div>

            )
          })
        }
      </div>

    </div>
  );
};

export default PostPhoto;