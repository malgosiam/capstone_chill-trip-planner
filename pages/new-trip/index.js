import { useRouter } from "next/router";
import NewTripForm from "../../components/NewTripForm";
import StyledHeader from "../../components/StyledHeader";
import { useNewTripStore } from "../../stores/useNewTripStore";
import { uid } from "uid";

export default function NewTripPage({ onSubmit }) {
  const router = useRouter();
  const addTrip = useNewTripStore((state) => state.addTrip);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const tripData = {
      id: uid(),
      townName: data.location,
      startDate: data.startDate,
      endDate: data.endDate,
    };

    if (onSubmit) onSubmit(tripData);
    addTrip(tripData);
    router.push("/trips");
  }
  return (
    <>
      <StyledHeader>Add new trip</StyledHeader>
      <NewTripForm onSubmit={handleSubmit} />
    </>
  );
}
