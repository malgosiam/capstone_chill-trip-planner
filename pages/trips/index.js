import Link from "next/link";
import StyledButton from "../../components/StyledButton";
import StyledHeader from "../../components/StyledHeader";
import TripList from "../../components/TripList";
import styled from "styled-components";
import { useNewTripStore } from "../../stores/useNewTripStore";

const FixedButton = styled(StyledButton)`
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translate(-50%, -50%);
  will-change: transform;
`;

export default function TripsPage() {
  const trips = useNewTripStore((state) => state.trips);
  return (
    <>
      <StyledHeader>My trips</StyledHeader>
      <TripList trips={trips} />
      <Link href="/new-trip" passHref legacyBehavior>
        <FixedButton>Add new trip</FixedButton>
      </Link>
    </>
  );
}
