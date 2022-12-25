import {LesArbresRemarquables,footer,note,button}from"./index.module.css"
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

      <div className={footer}>
        <p className={note}>Nt: you can sort the column by clicking on the header</p>
        <section >
          <button className={button}>Previous Page</button>
          <button className={button}>Next Page</button>
        </section>
      </div>
    </div>
  )
}

export default LesArbresRemarquable