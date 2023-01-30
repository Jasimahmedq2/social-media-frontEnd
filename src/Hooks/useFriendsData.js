import axios from "axios"
import { useEffect, useState } from "react"

const useFriendsData = (id) => {
  const [userData, setUserData] = useState([])

  const loadUserData = async () => {
    const { data } = await axios.get(`https://own-social.onrender.com/api/user/userProfile/?userId=${id}`)
    setUserData(data)
  }


  useEffect(() => {
    loadUserData()
  }, [])

  return [userData]
}
export default useFriendsData;