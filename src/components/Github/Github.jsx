import { useEffect, useState } from "react"
// import axios from 'axios'
// import { useLoaderData } from 'react-router-dom'

 

function Github() {
  // const data = useLoaderData()
   
  
  
  const [data, setData] = useState('')

    useEffect( () => {
      fetch('https://api.github.com/users/DAVID25JAVA')
        .then(response => response.json())
        .then(data => {
          setData(data)
          console.log(data);
        })
  },[])
  return (
    <>
    
    <div className=" w-80 mx-auto text-center font-semibold font-serif text-2xl my-5 bg-slate-500 text-white p-5 ">
        Github Followers: {data.followers}
        <p>Name: {data.name}</p>
        <img className="py-3 px-3" src={data.avatar_url} alt="" />
    </div>
    </>
  )
}

export default Github

// export const GitInfoLoader = async () => {
//   const response = await axios.get('https://api.github.com/users/DAVID25JAVA')
//   return response
// }