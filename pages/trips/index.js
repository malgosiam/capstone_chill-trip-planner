import StyledHeader from "../../components/StyledHeader";
import TripList from "../../components/TripList";
import { trips } from "../../data/trips.js";

export default function TripsPage() {
  return (
    <>
      <StyledHeader>My trips</StyledHeader>
      <TripList trips={trips} />
    </>
  );
}
