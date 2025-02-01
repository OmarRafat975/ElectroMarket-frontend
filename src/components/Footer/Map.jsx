import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// eslint-disable-next-line react/prop-types
export default function Map({ className }) {
  const position = [52.3791, 4.7473];

  return (
    <>
      <div
        className={
          'h-[16rem] w-full bg-gray-700 rounded-lg overflow-hidden ' + className
        }
        id="map"
      >
        <MapContainer center={position} zoom={15} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              Horeca Markt <br /> Weerenweg 35 B, 1161 AG Zwanenburg
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
