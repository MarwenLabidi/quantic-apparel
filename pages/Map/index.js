import {map}from "./index.module.css";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "/images/icon-location.png";
import { useMap } from "react-leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  iconSize: [46, 56],
  // iconAnchor: [23, 56],
  // popupAnchor: [0, -56],
});
function MultipleMarkers({ data }) {
  if (!data) {
          return;
  }
  return data?.map((tree, index) => {
          if (!tree.coordinates) {
                  return;
          }
          return (
                  <Marker
                          key={index}
                          position={[
                                  tree.coordinates[0],
                                  tree.coordinates[1],
                          ]}
                          icon={DefaultIcon}>
                          <Popup>
                            <p>genre:{tree.genre}</p>
                            <p>libellefrancais:{tree.libellefrancais}</p>
                          </Popup>
                  </Marker>
          );
  });
}
const Map = () => {
  return (
    <div className={map}>Map</div>
  )
}

export default Map