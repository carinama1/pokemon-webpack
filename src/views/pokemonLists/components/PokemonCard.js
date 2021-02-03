import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const CardContainer = styled.div`
  margin: 16px;
  &:hover {
    margin-top: 8px;
  }
  width: 200px;
  @media (max-width: 600px) {
    width: 110px;
    margin: 4px;
  }
`;
const Card = styled.div`
  padding: 24px;
  height: auto;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);
  cursor: pointer;
  @media (max-width: 600px) {
    padding: 12px;
  }
`;

const PokemonCardname = styled.div`
  font-weight: bold;
  margin-top: 16px;
  text-transform: capitalize;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

const PokemonImage = styled.img({
  background: "#f5f5f5",
  width: "100%",
  borderRadius: "50%",
});

const OwnedCard = styled("span")`
  margin-top: 12px;
  padding: 10px 14px;
  border-radius: 16px;
  background-color: #ffcb05;
  color: #806600;
  font-size: 0.75rem;
  white-space: nowrap;
  @media (max-width: 600px) {
    font-size: 0.5rem;
  }
  font-weight: bold;
`;

const PokemonCard = ({ pokemon, ...rest }) => {
  const navigation = useNavigate();
  return (
    <CardContainer>
      <Card
        onClick={() =>
          navigation("/pokemon-details", {
            replace: false,
            state: { name: pokemon.name, image: pokemon.image },
          })
        }
      >
        <PokemonImage src={pokemon.image} alt="Pokemon "></PokemonImage>
        <PokemonCardname className="pokemon-name">
          {pokemon.name}
        </PokemonCardname>
        <OwnedCard> CAPTURED : {pokemon.owned}</OwnedCard>
      </Card>
    </CardContainer>
  );
};

export default PokemonCard;
