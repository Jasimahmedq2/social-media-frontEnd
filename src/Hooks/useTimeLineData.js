import { useCallback, useState } from "react"
import { useEffect } from "react"
import { useQuery } from "react-query"

const useTimeLineData = (id) => {

  const { isLoading,  error, data,  refetch} = useQuery('timelineData', () => fetch(`https://own-social.onrender.com/api/post/timeline/?userId=${id}`)
    .then(res => res.json())
  )
  
  return { data, refetch, isLoading,  error}
}

export default useTimeLineData;