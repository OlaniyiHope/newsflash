import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import "./index.css";

const Container = styled.div`
  margin: 3px;
  position: relative;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  background-color: black;
  cursor: pointer;
  font-weight: 300;
  display: block;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/properties/${item.name}`}>
        <Title>{item.name}</Title>
      </Link>
    </Container>
  );
};

export default CategoryItem;
