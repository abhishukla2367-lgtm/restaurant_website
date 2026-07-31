import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* Fix default marker icons (important for React) */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* Re-centers the map whenever delivery position changes */
const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position]);
  return null;
};

const LiveTrackingMap = () => {
  // Dosa Atelier — Deodhar Road, Matunga East, Mumbai, MH 400019
  const restaurantLocation = [19.0262, 72.8521];

  const [deliveryLocation, setDeliveryLocation] = useState([
    19.0302,
    72.8561,
  ]);

  // Simulate live movement toward the restaurant
  useEffect(() => {
    const interval = setInterval(() => {
      setDeliveryLocation((prev) => [
        prev[0] - 0.0003,
        prev[1] - 0.0003,
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6">
      <h3 className="font-semibold text-gray-700 mb-2">
        Live Delivery Tracking
      </h3>

      <div className="h-[280px] rounded-xl overflow-hidden border">
        <MapContainer
          center={deliveryLocation}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="© OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Re-center map as delivery moves */}
          <RecenterMap position={deliveryLocation} />

          {/* Dosa Atelier Restaurant */}
          <Marker position={restaurantLocation}>
            <Popup>🍽️ Dosa Atelier Restaurant<br />Deodhar Road, Matunga East, Mumbai, MH 400019</Popup>
          </Marker>

          {/* Delivery Partner */}
          <Marker position={deliveryLocation}>
            <Popup>Delivery partner 🚴</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LiveTrackingMap;