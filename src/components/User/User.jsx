import { useParams } from "react-router-dom"


function User() {
    const { userid } = useParams()
     
          
    return (
      <>
          <div className="  my-3 p-2 mx-auto container text-center text-2xl bg-slate-500 rounded shadow text-white">
              User : {userid} 
        </div>
      </>
  )
}

export default User