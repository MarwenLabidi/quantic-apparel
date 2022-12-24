const URL="http://localhost:3000/api/GetThePercentageOfRemarquableTreeForEachArrondisseent"
import { ResponsivePie } from "@nivo/pie"
import {piesChart}from"./index.module.css"
const pieData = [
  {
    id: "java",
    label: "java",
    value: 100,
    color: "hsl(90, 70%, 50%)"
  },]
const PiesChart = () => {
  return (
    <div className={piesChart}>
       <ResponsivePie
      data={pieData}
      margin={{ top: 240, right: 280, bottom: 280, left: 280 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    />
    
    </div>
  )
}

export default PiesChart