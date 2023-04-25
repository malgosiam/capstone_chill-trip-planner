import { useRouter } from "next/router";
import { useNewTripStore } from "../../../stores/useNewTripStore";
import StyledHeader from "../../../components/StyledHeader";
import StyledButton from "../../../components/StyledButton";
import Link from "next/link";
import StyledContainer from "../../../components/StyledContainer";
import StyledButtonsContainer from "../../../components/StyledButtonsContainer";
import ConfirmDialogBox from "../../../components/ConfirmDialogBox";
import { useState } from "react";
import EditDatesDialogBox from "../../../components/EditDatesDialogBox";

export default function MyTripPage() {
  const trips = useNewTripStore((state) => state.trips);
  const deleteTrip = useNewTripStore((state) => state.deleteTrip);
  const updateTripDates = useNewTripStore((state) => state.updateTripDates);
  const [showConfirmDialogBox, setShowConfirmDialogBox] = useState(false);
  const [showEditDialogBox, setShowEditDialogBox] = useState(false);
  const router = useRouter();
  if (!router.isReady) {
    return <h2>Loading</h2>;
  }
  const { id } = router.query;
  const tripData = trips.find((trip) => trip.id === id);
  if (!tripData) {
    return <h2>Trip not found</h2>;
  }

  function handleDelete() {
    setShowConfirmDialogBox(true);
  }

  function confirmDelete() {
    deleteTrip(id);
    router.push("/trips");
  }

  function handleEdit() {
    setShowEditDialogBox(true);
  }

  function handleSave(newStartDate, newEndDate) {
    updateTripDates(id, newStartDate, newEndDate);
    setShowEditDialogBox(false);
  }

  return (
    <>
      <StyledHeader>Trip to {tripData.townName}</StyledHeader>

      <StyledContainer>
        <h3>
          from {tripData.startDate} to {tripData.endDate}
        </h3>
        <Link href={`/trips/${id}/places`} passHref legacyBehavior>
          <StyledButton>Plan places to visit</StyledButton>
        </Link>
        <Link href={`/trips/${id}/packing-list`} passHref legacyBehavior>
          <StyledButton>My packing list</StyledButton>
        </Link>
        <Link href={`/trips/${id}/tickets`} passHref legacyBehavior>
          <StyledButton disabled>Add tickets/ booked places</StyledButton>
        </Link>
        <Link href={`/trips/${id}/documents`} passHref legacyBehavior>
          <StyledButton disabled>Add documents</StyledButton>
        </Link>
      </StyledContainer>
      <StyledButtonsContainer>
        <StyledButton className="deleteButton" onClick={handleDelete}>
          Delete Trip
        </StyledButton>
        <StyledButton className="changeButton" onClick={handleEdit}>
          Change dates
        </StyledButton>
        <Link href="/trips" passHref legacyBehavior>
          <StyledButton>Back</StyledButton>
        </Link>
      </StyledButtonsContainer>
      {showConfirmDialogBox && (
        <ConfirmDialogBox
          isOpen={showConfirmDialogBox}
          onConfirm={confirmDelete}
          onCancel={() => setShowConfirmDialogBox(false)}
        />
      )}
      {showEditDialogBox && (
        <EditDatesDialogBox
          onSave={handleSave}
          onCancel={() => setShowEditDialogBox(false)}
          startDate={tripData.startDate}
          endDate={tripData.endDate}
          updateTripDates={updateTripDates}
        />
      )}
    </>
  );
}
