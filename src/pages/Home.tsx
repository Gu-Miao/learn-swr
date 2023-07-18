import { useEffect } from 'react'
import axios from 'axios'
import useSWR from 'swr'

function Home() {
  const { data, error, isLoading } = useSWR<string, string>('/api', axios)

  console.log(data, error)

  return (
    <div>
      <h1>Home</h1>
      {isLoading ? <div>Loading...</div> : error ? <div>Error</div> : <div>data: Yes</div>}
    </div>
  )
}

export default Home
