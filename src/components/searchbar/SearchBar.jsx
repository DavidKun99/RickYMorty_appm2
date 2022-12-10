import styled from "styled-components";
import { useState } from "react";

const DivSearch = styled.div`
padding: 1em;
display: flex;
justify-content: center;
`;

const Btn = styled.button`
border-radius: 0.5em;
margin-left: 0.5em;
padding: 0.5em;
border: solid #18171c;
color: #370617;
font-weight: 700;
font-size: 1em;
&:hover {
  background-color: #808080;
  cursor: pointer;
}
`;

const Input = styled.input`
border-radius: 0.5em;
margin-left: 0.5em;
padding: 0.5em;
border: solid #18171c;
color: #370617;
font-weight: 700;
font-size: 1em;
&:hover {
  background-color: #808080;
}
`;

export default function SearchBar(props) {

  const { onSearch } = props;
  const [character, setCharacter]= useState("");

  const handleChange = (evento) => {
    setCharacter(evento.target.value)
  }

  return (
    <DivSearch>
      <Input type="search" value={character} onChange={handleChange}/>
      <Btn onClick={() => onSearch(character)}>Agregar</Btn>
    </DivSearch>
  );
}
