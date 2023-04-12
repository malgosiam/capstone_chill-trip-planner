import StyledListContainer from "../StyledListContainer";
import StyledListItem from "../StyledListItem";
import { StyledLink } from "../StyledLink";

export default function TripList({ trips }) {
  const sortedTrips = trips
    ?.slice()
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
    <StyledListContainer>
      {sortedTrips.map((trip) => (
        <StyledLink key={trip.id} href={`/trips/${trip.id}`} passHref>
          <time>{trip.startDate}</time>
          {trip.townName}
        </StyledLink>
      ))}
    </StyledListContainer>
  );
}
