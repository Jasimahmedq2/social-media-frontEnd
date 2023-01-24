export const loginStart = (userInfo) => ({
  type: "login_start"
})

export const loginSuccess = (user) => ({
  type: "login_success",
  payload: user,
})

export const loginFailure = (error) => ({
  type: "login_failure",
  payload: error,
})