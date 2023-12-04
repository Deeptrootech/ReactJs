import { useEffect } from 'react'

function useUpdateDOMTitle(count) {
  useEffect(() => {
    document.title = `Count : ${count}`
  }, [count])
}

export default useUpdateDOMTitle