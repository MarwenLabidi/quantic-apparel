let URL = null;
if (process.env.NODE_ENV === "development") {
        URL =
                "http://localhost:3000/api/GetTheHeightAndTheCircumferenceForEchTree";
} else {
        URL =
                "https://quantic-apparel.vercel.app/api/GetTheHeightAndTheCircumferenceForEchTree";
}
import { scatterplot } from "./index.module.css";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

import useSWR from "swr";
import { ClipLoader } from "react-spinners";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Scatterplot = () => {
        const { data, error, isLoading } = useSWR(URL, fetcher);

        return (
                <div className={scatterplot}>
                        <p
                                style={{
                                        textAlign: "center",
                                        padding: "20px 0 0 0",
                                        color: "gray",
                                }}>
                                Visualizing the relationship between tree height
                                and circumference.
                        </p>
                        {isLoading && (
                                <div
                                        style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                padding: "150px",
                                        }}>
                                        <ClipLoader
                                                color={"#800080"}
                                                // loading={loading}
                                                // cssOverride={override}
                                                size={220}
                                                aria-label='Loading Spinner'
                                                data-testid='loader'
                                        />
                                </div>
                        )}
                        {error && (
                                <p
                                        style={{
                                                fontSize: "40px",
                                                textAlign: "center",
                                                color: "red",
                                                fontWeight: "bold",
                                        }}>
                                        Failed to load
                                </p>
                        )}
                        {data && (
                                <ResponsiveScatterPlot
                                        data={data}
                                        margin={{
                                                top: 160,
                                                right: 140,
                                                bottom: 200,
                                                left: 130,
                                        }}
                                        xScale={{
                                                type: "linear",
                                                min: 0,
                                                max: "auto",
                                        }}
                                        xFormat='>-.2f'
                                        yScale={{
                                                type: "linear",
                                                min: 0,
                                                max: "auto",
                                        }}
                                        yFormat='>-.2f'
                                        blendMode='multiply'
                                        axisTop={null}
                                        axisRight={null}
                                        colors='#5f259f'
                                        axisBottom={{
                                                orient: "bottom",
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                                legend: "circonference en cm",
                                                legendPosition: "middle",
                                                legendOffset: 46,
                                        }}
                                        axisLeft={{
                                                orient: "left",
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                                legend: "hauteur en m",
                                                legendPosition: "middle",
                                                legendOffset: -60,
                                        }}
                                        legends={[
                                                {
                                                        anchor: "bottom-right",
                                                        direction: "column",
                                                        justify: false,
                                                        translateX: 130,
                                                        translateY: 0,
                                                        itemWidth: 100,
                                                        itemHeight: 12,
                                                        itemsSpacing: 5,
                                                        itemDirection:
                                                                "left-to-right",
                                                        symbolSize: 12,
                                                        symbolShape: "circle",
                                                        effects: [
                                                                {
                                                                        on: "hover",
                                                                        style: {
                                                                                itemOpacity: 1,
                                                                        },
                                                                },
                                                        ],
                                                },
                                        ]}
                                />
                        )}
                </div>
        );
};

export default Scatterplot;
