import axios from "axios"

export const loginApiCall = async (userinfo, dispatch) => {
  dispatch({ type: "login_start" })
  try {
    const { data } = await axios.post('http://localhost:9000/login', userinfo)
    console.log("data", data)
    dispatch({ type: "login_success", payload: data })

  } catch (error) {
    dispatch({ type: "login_failure", payload: error })
  }
}