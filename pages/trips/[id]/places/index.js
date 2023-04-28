import { useRouter } from "next/router";
import { useNewTripStore } from "../../../../stores/useNewTripStore";
import StyledHeader from "../../../../components/StyledHeader";
import StyledContainer from "../../../../components/StyledContainer";
import styled from "styled-components";
import Link from "next/link";
import NotChillSvg from "../../../../public/assets/chicken1.svg";
import ChillSvg from "../../../../public/assets/chicken2_1.svg";
import StyledCard from "../../../../components/StyledCard";
import StyledButtonsContainer from "../../../../components/StyledButtonsContainer";
import StyledButton from "../../../../components/StyledButton";
import StyledBox from "../../../../components/StyledBox";

const ChillIcon = styled(ChillSvg)`
  position: absolute;
  top: -10px;
  right: 5px;
  width: auto;
  height: 75px;
`;

const NotChillIcon = styled(NotChillSvg)`
  position: absolute;
  top: -10px;
  right: 5px;
  width: auto;
  height: 65px;
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: var(--blue);
  font-size: 1em;
  color: var(--white);
  border-radius: 0.6rem;
  border: 1px solid var(--light-blue);
  transition: all 0.3s ease-out;
  flex: 1;

  &:hover {
    background-color: var(--yellow);
    color: var(--blue);
    box-shadow: 0 0 10px var(--shadow);
  }
`;

function PlaceList() {
  const trips = useNewTripStore((state) => state.trips);
  const places = useNewTripStore((state) => state.places);
  const updatePlaceRating = useNewTripStore((state) => state.updatePlaceRating);

  const router = useRouter();
  const { id } = router.query;
  const tripData = trips.find((trip) => trip.id === id);
  const tripPlaces = places.filter((place) => place.tripId === id);

  if (places.length === 0) {
    return <div>No places found for this trip</div>;
  }

  function handleRatingChange(id, event) {
    updatePlaceRating(id, event.target.value);
  }

  return (
    <>
      {tripData && (
        <StyledHeader>Places to visit in {tripData.townName} </StyledHeader>
      )}
      <StyledButtonsContainer>
        <Link href={`/trips/${id}/places/new-place`} passHref legacyBehavior>
          <StyledButton>Add new place</StyledButton>
        </Link>
      </StyledButtonsContainer>
      <StyledContainer>
        {tripPlaces.map((place) => (
          <StyledCard key={place.id}>
            <h3>{place.name}</h3>
            <StyledBox>
              <select
                name="chill-rating"
                id="chill-rating"
                value={place.rating}
                onChange={(event) => handleRatingChange(place.id, event)}
              >
                <option value="">Chill or not</option>
                <option value="chill">Chill</option>
                <option value="not">Not chill</option>
              </select>

              {place.rating === "chill" ? (
                <ChillIcon viewBox="0 0 196 176" preserveAspectRatio="none" />
              ) : place.rating === "not" ? (
                <NotChillIcon
                  viewBox="0 0 156 161"
                  preserveAspectRatio="none"
                />
              ) : null}

              <StyledLink href={place.mapsUrl} target="_blank">
                Link to place
              </StyledLink>
            </StyledBox>
            <fieldset>
              <legend>About the place: </legend>
              <p>{place.description}</p>
            </fieldset>
          </StyledCard>
        ))}
      </StyledContainer>
    </>
  );
}

export default PlaceList;
