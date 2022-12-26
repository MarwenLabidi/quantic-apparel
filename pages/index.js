const URL="http://localhost:3000/api/GetLesArbresRemarquablesData"
import {LesArbresRemarquables,}from"../styles/Home.module.css"
import Table from "../components/table/Table";


import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const LesArbresRemarquable = () => {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  return (
    <div className={LesArbresRemarquables}>
      <p style={{textAlign: 'center', padding: '20px', color: 'gray'}}>Paris is a city full of natural beauty and architectural marvels. Among these marvels, there are trees which have been especially remarkable. Various species of trees, venerable trees and trees with a long history are present in Paris. These trees are considered natural wonders and are an integral part of the city's culture.
and you'll find below more information about those trees :</p>
      {data && (<Table data={data} />)}   
    </div>
  )
}

export default LesArbresRemarquable