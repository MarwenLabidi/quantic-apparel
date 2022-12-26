const URL = "http://localhost:3000/api/CountTreesNumberForEachArrondissent";
import { barGraph } from "./index.module.css";
import { ResponsiveBar } from "@nivo/bar";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const BarGraph = () => {
        const { data, error, isLoading } = useSWR(URL, fetcher);

        return (
                <div className={barGraph}>
                        <p style={{textAlign: 'center', padding: '20px 0 0 0', color: 'gray'}} >Visualizing the number of trees across each arrondissement</p>
                  {data&&(<ResponsiveBar
                                data={data}
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
