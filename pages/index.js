const URL="http://localhost:3000/api/GetLesArbresRemarquablesData"
import {LesArbresRemarquables,}from"../styles/Home.module.css"
import Table from "../components/table/Table";


export async function getStaticProps() {
 const res = await fetch(URL);
 const data = await res.json()

 return {
   props: {
     data,
   },
 }
}
const LesArbresRemarquable = (props) => {
  return (
    <div className={LesArbresRemarquables}>
      {props.data && (<Table data={props.data} />)}   
    </div>
  )
}

export default LesArbresRemarquable