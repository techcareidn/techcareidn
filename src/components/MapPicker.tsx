"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

type LatLng = { lat: number; lng: number };

export function MapPicker({ value, onChange }: { value?: LatLng; onChange: (v: LatLng) => void }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  });

  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return <div className="mapFallback">Google Maps API key belum di-set. Lokasi bisa diisi manual.</div>;
  }

  if (!isLoaded) return <div className="mapFallback">Memuat peta...</div>;

  const center = value ?? { lat: -6.2, lng: 106.816666 };

  return (
    <GoogleMap
      zoom={13}
      center={center}
      mapContainerClassName="mapBox"
      onClick={(e) => onChange({ lat: e.latLng!.lat(), lng: e.latLng!.lng() })}
    >
      {value && <Marker position={value} />}
    </GoogleMap>
  );
}
