import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import StyledInput from "../StyledInput";
import StyledForm from "../StyledForm";
import StyledButton from "../StyledButton";
import StyledBox from "../StyledBox";
import StyledButtonsContainer from "../StyledButtonsContainer";

const StyledTextarea = styled.textarea`
  border-radius: 1.3rem;
  border: 1px solid var(--light-blue);
  font-size: 16px;
  font-family: Arial;
  padding: 1.6rem;
  margin: 0.4rem 0;
  background-color: var(--blue);
  color: var(--white);
  width: 100%;
  height: 5rem;
  resize: vertical;
`;

export default function NewPlaceForm({ onSubmit, tripId }) {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    tripId: tripId,
    name: "",
    rating: "",
    mapsUrl: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <input type="hidden" name="tripId" value={tripId} />
        <label htmlFor="name">Place name</label>
        <StyledInput
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        <StyledBox>
          <label htmlFor="chill-rating">Place is</label>
          <select
            name="rating"
            id="chill-rating"
            value={formData.rating}
            onChange={handleInputChange}
          >
            <option value="">Chill or not</option>
            <option value="chill">Chill</option>
            <option value="not">Not chill</option>
          </select>
        </StyledBox>

        <label htmlFor="mapsUrl">Maps URL</label>
        <StyledInput
          type="url"
          name="mapsUrl"
          id="mapsUrl"
          value={formData.mapsUrl}
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description</label>
        <StyledTextarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <StyledButtonsContainer>
          <StyledButton type="submit">Add</StyledButton>
          <Link href={`/trips/${id}/places`} passHref legacyBehavior>
            <StyledButton>Back</StyledButton>
          </Link>
        </StyledButtonsContainer>
      </StyledForm>
    </>
  );
}
