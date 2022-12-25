const URL = "http://localhost:3000/api/CountTreesNumberForEachArrondissent";
import { barGraph } from "./index.module.css";
import { ResponsiveBar } from "@nivo/bar";

export async function getStaticProps() {
        const res = await fetch(URL);
        const data = await res.json()
       
        return {
          props: {
            data,
          },
        }
       }
       
const BarGraph = (props) => {

        return (
                <div className={barGraph}>
                        <p style={{textAlign: 'center', padding: '20px 0 0 0', color: 'gray'}} >Visualizing the number of trees across each arrondissement</p>
                  {props.data&&(<ResponsiveBar
                                data={props.data}
                                keys={["TreesNumber"]} 
                                indexBy='Arrondissent'
                                margin={{
                                        top: 150,
                                        right: 80,
                                        bottom: 200,
                                        left: 80,
                                }}
                                padding={0.7}
                                valueScale={{ type: "linear" }}
                                colors='#5f259f'
                                animate={true}
                                enableLabel={false}
                                axisTop={null}
                                axisRight={null}
                                isInteractive={false}
                                axisLeft={{
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: "TreesNumber",
                                        legendPosition: "middle",
                                        legendOffset: -40,
                                }}
                                axisBottom={{
                                  tickSize: 5,
                                  tickPadding: 8,
                                  tickRotation: 25,
                                  legend: "Arrondissent",
                                  legendPosition: "middle",
                                  legendOffset: 80,
                          }}
                                
                        />)}
                </div>
        );
};

export default BarGraph;
