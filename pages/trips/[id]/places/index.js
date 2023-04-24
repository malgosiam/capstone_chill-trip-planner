import { useRouter } from "next/router";
import { useNewTripStore } from "../../../../stores/useNewTripStore";
import StyledHeader from "../../../../components/StyledHeader";
import StyledContainer from "../../../../components/StyledContainer";
import styled from "styled-components";
import Link from "next/link";
import NotChillSvg from "../../../../public/assets/chicken1.svg";
import ChillSvg from "../../../../public/assets/chicken2_1.svg";
import StyledCard from "../../../../components/StyledCard";

const StyledBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: var(--blue);
  background: linear-gradient(90deg, var(--blue) 35%, var(--light-blue) 100%);
  color: var(--white);
  margin: 0.5rem 0;
  border-radius: 1.3rem;
  border: 1px solid var(--light-blue);
  box-shadow: 0 0 10px var(--shadow);

  select {
    flex: 1;
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid var(--light-blue);
    border-radius: 0.6rem;
    font-size: 1em;
    background-color: var(--white);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: ▽);
    background-repeat: no-repeat;
    background-position: right;
    padding-right: 1.5rem;
  }
`;

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

              <StyledLink href={place.mapsUrl}>Link to place</StyledLink>
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
