let URL = null;
if (process.env.NODE_ENV === "development") {
        URL =
                "http://localhost:3000/api/GetThePercentageOfRemarquableTreeForEachArrondisseent";
} else {
        URL =
                "https://quantic-apparel.vercel.app/api/GetThePercentageOfRemarquableTreeForEachArrondisseent";
}
import { ResponsivePie } from "@nivo/pie";
import { piesChart, name, grid } from "./index.module.css";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PiesChart = () => {
        const { data, error, isLoading } = useSWR(URL, fetcher);

        return (
                <div className={piesChart}>
                        <p
                                style={{
                                        textAlign: "center",
                                        padding: "20px 0 0 0",
                                        color: "gray",
                                }}>
                                Visualizing the percentage of trees that are
                                considered "remarquable" in each arrondissement.
                        </p>

                        {isLoading && (
                                <p
                                        style={{
                                                fontSize: "80px",
                                                textAlign: "center",
                                                color: "blue",
                                                fontWeight: "bold",
                                        }}>
                                        Loading...
                                </p>
                        )}
                        {error && (
                                <p
                                        style={{
                                                fontSize: "80px",
                                                textAlign: "center",
                                                color: "red",
                                                fontWeight: "bold",
                                        }}>
                                        Failed to load
                                </p>
                        )}
                        <div className={grid}>
                                {data &&
                                        data.map((pieData, index) => (
                                                <div
                                                        key={`divivi${pieData[0].id}`}>
                                                        <h3
                                                                key={
                                                                        pieData[0]
                                                                                .id
                                                                }
                                                                className={
                                                                        name
                                                                }>
                                                                {pieData[0].id}
                                                        </h3>
                                                        <ResponsivePie
                                                                data={pieData}
                                                                key={`piememe${pieData[0].id}`}
                                                                colors='#5f259f'
                                                                margin={{
                                                                        top: 35,
                                                                        right: 35,
                                                                        bottom: 35,
                                                                        left: 35,
                                                                }}
                                                                innerRadius={
                                                                        0.5
                                                                }
                                                                padAngle={0.7}
                                                                cornerRadius={3}
                                                                activeOuterRadiusOffset={
                                                                        8
                                                                }
                                                                borderWidth={1}
                                                                isInteractive={
                                                                        false
                                                                }
                                                                borderColor={{
                                                                        from: "color",
                                                                        modifiers: [
                                                                                [
                                                                                        "darker",
                                                                                        0.2,
                                                                                ],
                                                                        ],
                                                                }}
                                                                arcLinkLabelsSkipAngle={
                                                                        10
                                                                }
                                                                arcLinkLabelsTextColor='#333333'
                                                                arcLinkLabelsThickness={
                                                                        2
                                                                }
                                                                arcLinkLabelsColor={{
                                                                        from: "color",
                                                                }}
                                                                arcLabelsSkipAngle={
                                                                        10
                                                                }
                                                                arcLabelsTextColor={{
                                                                        from: "color",
                                                                        modifiers: [
                                                                                [
                                                                                        "darker",
                                                                                        2,
                                                                                ],
                                                                        ],
                                                                }}
                                                                height={250}
                                                                width={250}
                                                        />
                                                </div>
                                        ))}
                        </div>
                </div>
        );
};

export default PiesChart;
