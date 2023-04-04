import StyledListContainer from "../StyledListContainer";
import StyledListItem from "../StyledListItem";

export default function TripList({ trips }) {
  return (
    <StyledListContainer>
      {trips?.map((trip) => (
        <StyledListItem key={trip.id}>
          <time>{trip.endDate}</time>
          {trip.townName}
        </StyledListItem>
      ))}
    </StyledListContainer>
  );
}
