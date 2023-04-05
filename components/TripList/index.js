import StyledListContainer from "../StyledListContainer";
import StyledListItem from "../StyledListItem";

export default function TripList({ trips }) {
  const sortedTrips = trips
    ?.slice()
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
    <StyledListContainer>
      {sortedTrips.map((trip) => (
        <StyledListItem key={trip.id}>
          <time>{trip.startDate}</time>
          {trip.townName}
        </StyledListItem>
      ))}
    </StyledListContainer>
  );
}
