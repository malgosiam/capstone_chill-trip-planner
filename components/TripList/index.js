export default function TripList({ trips }) {
  return (
    <ul>
      {trips?.map((trip) => (
        <li key={trip.id}>
          {trip.startDate}
          {trip.townName}
        </li>
      ))}
    </ul>
  );
}
