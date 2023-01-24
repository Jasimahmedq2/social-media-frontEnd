const ReducerContext = (state, action) => {
  switch (action.type) {
    case "login_start":
      return {
        user: null,
        isFetching: true,
        error: false
      }
    case "login_success":
      return {
        user: state.payload,
        isFetching: false,
        error: false
      }
    case "login_failure":
      return {
        user: null,
        isFetching: false,
        error: state.payload
      }
    default:
      return state
  }
}
export default ReducerContext;