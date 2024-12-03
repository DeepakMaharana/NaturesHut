import React from 'react'

const SearchPanel = () => {
  return (
    <div className='flex items-center justify-center my-2 '  >
        <form action="#" onSubmit={()=>{return false}}>
        <div className='container hidden sm:flex flex-wrap gap-4 p-3 bg-white border-2 border-slate-300 rounded-md shadow-[0_5px_15px_0_rgba(0,0,0,0.35)]'>
          <div>
            <label htmlFor="" className='w-full text-lg'>Location</label>
            <select name="" id="" className='w-full text-lg p-3 border-2 border-amber-950 rounded-lg'>
                <option value="1">Location 1</option>
                <option value="2">Location 2</option>
                <option value="3">Location 3</option>
                <option value="4">Location 4</option>
            </select>
          </div>
          <div>
            <label htmlFor="" className='w-full text-lg'>Check In</label>
            <input type="date" name="" id="" className='w-full text-lg p-3 border-2 border-amber-950 rounded-lg' />
          </div>
          <div>
            <label htmlFor="" className='w-full text-lg'>Check Out</label>
            <input type="date" name="" id="" className='w-full text-lg p-3 border-2 border-amber-950 rounded-lg' />
          </div>
          <div>
            <label htmlFor="" className='w-full text-lg'>Guest</label>
            
            <select name="" id="" className='w-full text-lg p-3 border-2 border-amber-950 rounded-lg'>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
            </select>
          </div>
          <div>
            <label htmlFor="" className='w-full text-lg'>&nbsp;</label>
            <button className='w-full text-lg p-3 text-white bg-amber-950 rounded-lg hover:bg-amber-950 border-2 border-amber-900'>Search</button>
          </div>
        </div>
        </form>
    </div>

  )
}

export default SearchPanel