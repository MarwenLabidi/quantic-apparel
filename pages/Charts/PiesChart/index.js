const URL="http://localhost:3000/api/GetThePercentageOfRemarquableTreeForEachArrondisseent"
import { ResponsivePie } from "@nivo/pie"
import {piesChart}from"./index.module.css"
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PiesChart = () => {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  return (
    <div className={piesChart}>
   {
    (data)&&(data.map((pieData,index)=>(
      <ResponsivePie
      data={pieData}
      key={index}
      // margin={{ top: 340, right: 280, bottom: 280, left: 280 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      isInteractive={false}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      height={250}
      width={250}
    />

    )))
   }
    
    </div>
  )
}

export default PiesChart