import axios from "axios"

export const loginApiCall = async (userinfo, dispatch) => {
  dispatch({ type: "LOGIN_START" })
  try {
    const {data} = await axios.post('http://localhost:9000/login', userinfo)
    console.log(data)
    dispatch({ type: "LOGIN_SUCCESS", payload: data })

  } catch (error) {
    console.log("error", error)
    dispatch({ type: "LOGIN_FAILURE", payload: error })
  }
}