import axios from "axios"
import { useEffect, useState } from "react"

const useUserPost = (id) => {
  const [userPost, setUserPost] = useState([])
  const loadUserPost = async () => {
    const { data } = await axios.get(`https://own-social.onrender.com/api/user/all/?userId=${id}`)
    setUserPost(data)
    console.log("data", data)
  }
  useEffect(() => {
    loadUserPost()
  }, [])
  return [userPost, setUserPost]
}

export default useUserPost;