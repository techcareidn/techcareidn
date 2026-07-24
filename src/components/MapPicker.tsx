"use client";
import { useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export type LatLng = { lat: number; lng: number };

const DEFAULT: LatLng = { lat: -7.7956, lng: 110.3695 }; // Yogyakarta

// Pemilih lokasi perangkat di peta (dipakai di DeviceForm).
export default function MapPicker({
  value, onChange
}: { value?: LatLng; onChange: (pos: LatLng) => void }) {
  const { isLoaded } = useJsApiLoader({
    id: "gmaps",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  });
  const [pos, setPos] = useState<LatLng>(value || DEFAULT);

  const onClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    const p = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    setPos(p);
    onChange(p);
  }, [onChange]);

  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return <div className="tc-map-fallback">Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY untuk mengaktifkan peta.</div>;
  }
  if (!isLoaded) return <div className="tc-map-fallback">Memuat peta…</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: 260, borderRadius: 14 }}
      center={pos}
      zoom={12}
      onClick={onClick}
      options={{ streetViewControl: false, mapTypeControl: false }}
    >
      <Marker position={pos} />
    </GoogleMap>
  );
}
