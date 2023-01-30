import { useCallback, useState } from "react"
import { useEffect } from "react"
import { useQuery } from "react-query"

const useTimeLineData = (id) => {

  const { isLoading,  error, data,  refetch} = useQuery('timelineData', () => fetch(`http://localhost:9000/api/post/timeline/?userId=${id}`)
    .then(res => res.json())
  )
  
  return { data, refetch, isLoading,  error}
}

export default useTimeLineData;