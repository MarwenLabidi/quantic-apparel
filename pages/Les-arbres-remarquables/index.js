import {LesArbresRemarquables}from"./index.module.css"
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL="http://localhost:3000/api/GetLesArbresRemarquablesData?rows=10&start=1"
import TableInstante from "../../components/table/tableInstante";
const LesArbresRemarquable = () => {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  return (
    <div className={LesArbresRemarquables}>
      <h1>Les arbres remarquables</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (<TableInstante data={data} />)}

    </div>
  )
}

export default LesArbresRemarquable