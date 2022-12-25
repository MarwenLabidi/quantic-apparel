import React,{useState} from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFiltering = ({ filter, setFilter }) => {
	const [value,setValue]=useState(filter)
	const onChange=useAsyncDebounce(value=>{
		setFilter(value||'')
	},1000)
        return (
                <span>
                       
                        <input   style={{margin: '20px auto', display: 'block', width: '500px',textAlign:'center'}} 
                                value={value || ""}
                                onChange={(e) => {
					setValue(e.target.value)
					onChange(e.target.value)
				}}
                                placeholder='Global Search'
                        />
                </span>
        );
};

export default GlobalFiltering;
