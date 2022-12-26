import{map}from'./index.module.css'
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../../components/MapComponent/index'), {
  ssr: false,
});
const Map = () => {
        

        return (
                <div className={map} >
                <MapWithNoSSR />
              </div>
             
        );
};

export default Map;
