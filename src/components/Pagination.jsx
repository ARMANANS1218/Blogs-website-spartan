import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const {page,handlePageChange,totalPages}=useContext(AppContext); 
  return (
    <div className='flex justify-around w-full border p-5 bg-slate-200 shadow-inner'>
      <div>
      { page>1 &&
         <button 
         className='border p-2 rounded-lg bg-slate-400'
         onClick={()=>handlePageChange(page-1)}>
            Previous
        </button>
       }
       { page < totalPages &&
         <button 
         className='border p-2 rounded-lg bg-slate-400'
          onClick={()=>handlePageChange(page+1)}>
            Next
        </button>
       }
      </div>
       
       <p>
        Page {page} of {totalPages}
       </p>
    </div>
  )
}

export default Pagination