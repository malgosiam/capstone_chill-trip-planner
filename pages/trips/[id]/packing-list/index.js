import { useRouter } from "next/router";
import { useNewTripStore } from "../../../../stores/useNewTripStore";
import StyledHeader from "../../../../components/StyledHeader";
import StyledListContainer from "../../../../components/StyledListContainer";
import StyledListItem from "../../../../components/StyledListItem";
import styled from "styled-components";

const StyledInput = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 7px;
  border: 1px solid var(--light-blue);
  outline: none;
  margin-right: 10px;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: var(--blue);
    border-color: var(--yellow);

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 12px;
      border-radius: 3px;
      background-color: var(--yellow);
      transition: all 0.1s ease-in;
    }
`;

function PackingList() {
  const packingLists = useNewTripStore((state) => state.packingLists);
  const router = useRouter();

  const { id } = router.query;
  const tripPackingList = packingLists[id];

  const updatePackingListItem = useNewTripStore(
    (state) => state.updatePackingListItem
  );

  function handleCheckboxChange(itemId) {
    const item = tripPackingList.find((item) => item.id === itemId);
    updatePackingListItem(id, itemId, !item.checked);
  }

  if (!router.query?.id) {
    return <div>No trip selected</div>;
  }

  if (!tripPackingList || tripPackingList.length === 0) {
    return (
      <>
        <StyledHeader>
          <h6>No items in packing list planned for this trip yet</h6>
        </StyledHeader>
      </>
    );
  }

  return (
    <>
      <StyledHeader>My packing list</StyledHeader>
      <StyledListContainer>
        {tripPackingList.map((item) => (
          <StyledListItem key={item.id}>
            <StyledInput
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label htmlFor="checkbox"></label>
            <span>
              {item.quantity} x {item.name}
            </span>
          </StyledListItem>
        ))}
      </StyledListContainer>
    </>
  );
}
export default PackingList;
