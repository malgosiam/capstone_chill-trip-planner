import TripList from "../../components/TripList";
import { trips } from "../../lib/trips.js";

export default function TripsPage() {
  return <TripList trips={trips} />;
}
