import { useRouter } from "next/router";
import { uid } from "uid";
import { useNewTripStore } from "../../../../../stores/useNewTripStore";
import StyledHeader from "../../../../../components/StyledHeader";
import NewPlaceForm from "../../../../../components/NewPlaceForm";

export default function NewPlacePage({ onSubmit }) {
  const addPlace = useNewTripStore((state) => state.addPlace);
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
    router.push(`/trips/${id}/places`);
  }
  return (
    <>
      <StyledHeader>Add new place</StyledHeader>
      <NewPlaceForm onSubmit={handleSubmit} tripId={id} />
    </>
  );
}
