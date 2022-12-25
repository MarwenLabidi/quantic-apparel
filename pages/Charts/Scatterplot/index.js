const URL="http://localhost:3000/api/GetTheHeightAndTheCircumferenceForEchTree"
import {scatterplot}from"./index.module.css"
import{ResponsiveScatterPlot} from"@nivo/scatterplot"

export async function getStaticProps() {
  const res = await fetch(URL);
  const data = await res.json()
 
  return {
    props: {
      data,
    },
  }
 }
const Scatterplot = (props) => {

  return (
    <div className={scatterplot}>
      {props.data&&(
        <ResponsiveScatterPlot
        data={props.data}
        margin={{ top: 160, right: 140, bottom: 160, left: 130 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        xFormat=">-.2f"
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        yFormat=">-.2f"
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'circonference en cm',
            legendPosition: 'middle',
            legendOffset: 46
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'hauteur en m',
            legendPosition: 'middle',
            legendOffset: -60
        }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 130,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />

      )}

    </div>
  )
}

export default Scatterplot