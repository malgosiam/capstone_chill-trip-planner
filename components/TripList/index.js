import StyledListContainer from "../StyledListContainer";
import StyledListItem from "../StyledListItem";

export default function TripList({ trips }) {
  return (
    <StyledListContainer>
      {trips
        ?.slice()
        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
        .map((trip) => (
          <StyledListItem key={trip.id}>
            <time>{trip.startDate}</time>
            {trip.townName}
          </StyledListItem>
        ))}
    </StyledListContainer>
  );
}
