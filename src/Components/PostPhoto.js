import React from 'react';
import useUserPost from '../Hooks/useUserPost';

const PostPhoto = ({currentUser}) => {
  const [userPost] = useUserPost(currentUser?._id)
  const PostPhoto = userPost.filter(uPhoto => uPhoto.img !== "")
  console.log("userPost", userPost)
  return (
    <div className='space-y-4 w-1/2'>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>photos</p>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2'>
        {
          PostPhoto.map(post => {
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