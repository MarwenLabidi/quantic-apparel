import React, { useState } from "react";
// import { useAsyncDebounce } from "react-table";

const GlobalFiltering = ({ filter, setFilter }) => {
        // const [value,setValue]=useState(filter)
        // const onChange=useAsyncDebounce(value=>{
        // 	setFilter(value||'')
        // },1000)
        return (
                <span>
                        <input
                                style={{
                                        margin: "5px auto",
                                        display: "block",
                                        width: "500px",
                                        textAlign: "center",
                                }}
                                value={filter || ""}
                                onChange={(e) => {
                                        // setValue(e.target.value)
                                        // onChange(e.target.value)
                                        setFilter(e.target.value);
                                }}
                                placeholder='Global Search'
                        />
                </span>
        );
};

export default GlobalFiltering;
