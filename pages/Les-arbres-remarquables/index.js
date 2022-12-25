import {LesArbresRemarquables}from"./index.module.css"
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL="http://localhost:3000/api/GetLesArbresRemarquablesData?rows=4&start=1"
import Table from "../../components/table/Table";
const LesArbresRemarquable = () => {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  return (
    <div className={LesArbresRemarquables}>
      {/* <h2>Les arbres remarquables</h2> */}
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (<Table data={data} />)}

    </div>
  )
}

export default LesArbresRemarquable