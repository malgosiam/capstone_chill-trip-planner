import { useRouter } from "next/router";
import { useState } from "react";
import { uid } from "uid";
import { useNewTripStore } from "../../../../../stores/useNewTripStore";
import StyledHeader from "../../../../../components/StyledHeader";
import NewPlaceForm from "../../../../../components/NewPlaceForm";
import LogoAnimation from "../../../../../components/LogoAnimation";

export default function NewPlacePage({ onSubmit }) {
  const addPlace = useNewTripStore((state) => state.addPlace);
  const [showAnimation, setShowAnimation] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const placeData = {
      id: uid(),
      tripId: data.tripId,
      name: data.name,
      rating: data.rating,
      mapsUrl: data.mapsUrl,
      description: data.description,
    };

    if (onSubmit) onSubmit(placeData);
    addPlace(placeData);
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      router.push(`/trips/${id}/places`);
    }, 2000);
  }

  return (
    <>
      <StyledHeader>Add new place</StyledHeader>
      <NewPlaceForm onSubmit={handleSubmit} tripId={id} />
      {showAnimation && <LogoAnimation />}
    </>
  );
}
