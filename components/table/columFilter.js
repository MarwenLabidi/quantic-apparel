import React from 'react'

const ColumFilter = ({column}) => {
	const {filterValue,setFilter}=column
  return (
	<span>
	search by column:{''}
	<input value={filterValue||''} onChange={e=>setFilter(e.target.value)}/>
    </span>
  )
}

export default ColumFilter