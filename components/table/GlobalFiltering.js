import React from 'react'

const GlobalFiltering = ({filter,setFilter}) => {
  return (
    <span>
	search:{''}
	<input value={filter||''} onChange={e=>setFilter(e.target.value)}/>
    </span>
  )
}

export default GlobalFiltering