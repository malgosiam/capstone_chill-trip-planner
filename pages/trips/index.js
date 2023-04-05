import Link from "next/link";
import StyledButton from "../../components/StyledButton";
import StyledHeader from "../../components/StyledHeader";
import TripList from "../../components/TripList";
import { trips } from "../../data/trips.js";
import styled from "styled-components";

const FixedButton = styled(StyledButton)`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  will-change: transform;
`;

export default function TripsPage() {
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
