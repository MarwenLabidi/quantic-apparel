import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL =
        "http://localhost:3000/api/GetTheCoordinatesAndGenreAndLibelefrancais";
import {
        MapContainer,
        TileLayer,
        Popup,
        Marker,
        useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "../../public/images/iconLocation.png";
import { useMap } from "react-leaflet";
import { useState, useEffect } from "react";

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
                                        <p>
                                                libellefrancais:
                                                {tree.libellefrancais}
                                        </p>
                                </Popup>
                        </Marker>
                );
        });
}
//handel click event
function MapClick() {
        const map = useMapEvent("click", (e) => {
                map.flyTo(e.latlng, map.getZoom());
        });
        return null;
}
const MapComponent = () => {
        const [center, setCenter] = useState([48.8566, 2.3522]);
        const [zoom, setZoom] = useState(13);
        const { data, error, isLoading } = useSWR(URL, fetcher);

        return (
                <MapContainer
                        center={center}
                        zoom={zoom}
                        scrollWheelZoom={false}>
                        <MapClick />

                        <TileLayer
                                attribution='&copy; <a href="https://github.com/MarwenLabidi">by MarwenLabidi</a> '
                                url={`https://api.mapbox.com/styles/v1/abidimarwen/cla5hdzif000j14t37tq0lcc2/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAP_KEY}`}
                        />

                        <MultipleMarkers data={data} />
                </MapContainer>
        );
};

export default MapComponent;
