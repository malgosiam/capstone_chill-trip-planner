import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import StyledContainer from "../StyledContainer";
import StyledInput from "../StyledInput";
import StyledForm from "../StyledForm";
import StyledButton from "../StyledButton";

const StyledTextarea = styled.textarea`
  height: 2rem;
  border-radius: 1.3rem;
  border: 1px solid var(--light-blue);
  font-size: 16px;
  font-family: Arial;
  padding: 1.6rem;
  margin: 0.4rem 0;
  background-color: var(--blue);
  color: var(--white);
  width: 100%;
  height: 6rem;
  resize: vertical;
`;

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

export default function NewPlaceForm({ onSubmit, tripId }) {
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
          <label htmlFor="chill-rating">Chill or not</label>
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

        <label htmlFor="mapsUrl">Google Maps URL</label>
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
        <StyledContainer>
          <StyledButton type="submit">Add</StyledButton>
          <Link href={`/places`} passHref legacyBehavior>
            <StyledButton>Back</StyledButton>
          </Link>
        </StyledContainer>
      </StyledForm>
    </>
  );
}
