const URL = "http://localhost:3000/api/CountTreesNumberForEachArrondissent";
import { barGraph } from "./index.module.css";
import { ResponsiveBar } from "@nivo/bar";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BarGraph = () => {
        const { data, error, isLoading } = useSWR(URL, fetcher);
     

        return (
                <div className={barGraph}>
                  {data&&(            <ResponsiveBar
                                data={data}
                                keys={["TreesNumber"]} 
                                indexBy='Arrondissent'
                                margin={{
                                        top: 50,
                                        right: 130,
                                        bottom: 50,
                                        left: 60,
                                }}
                                padding={0.4}
                                valueScale={{ type: "linear" }}
                                colors='#3182CE'
                                animate={true}
                                enableLabel={true}
                                axisTop={null}
                                axisRight={null}
                                axisLeft={{
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: "degrees",
                                        legendPosition: "middle",
                                        legendOffset: -40,
                                }}
                        />)}
                </div>
        );
};

export default BarGraph;
