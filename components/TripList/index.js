export default function TripList({ trips }) {
  return (
    <ul>
      {trips?.map((trip) => (
        <li key={trip.id}>
          {trip.startDate} - {trip.endDate}
          {trip.townName}
        </li>
      ))}
    </ul>
  );
}
