import { success } from "daisyui/src/colors"
import { useCallback, useState } from "react"
import { useEffect } from "react"
import { useQuery } from "react-query"
import Loader from "../shared/Loader"

const useTimeLineData = (id) => {

  const [allPost, setAllPost] = useState([])

  const { isLoading, error, status, data, refetch } = useQuery('timelineData', () => fetch(`https://own-social.onrender.com/api/post/timeline/?userId=${id}`)
    .then(res => res.json())
  )

  useEffect(() => {
    if (status === "success") {
      setAllPost(data)
    }
  }, [data])



  if (isLoading) {
    return <Loader />
  }

  return { allPost, setAllPost, refetch, isLoading }
}

export default useTimeLineData;