import React,{useState} from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFiltering = ({ filter, setFilter }) => {
	const [value,setValue]=useState(filter)
	const onChange=useAsyncDebounce(value=>{
		setFilter(value||'')
	},1000)
        return (
                <span>
                        search:{""}
                        <input
                                value={value || ""}
                                onChange={(e) => {
					setValue(e.target.value)
					onChange(e.target.value)
				}}
                        />
                </span>
        );
};

export default GlobalFiltering;
