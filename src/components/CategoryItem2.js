import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 3px;
  position: relative;
`;

const Title = styled.h4`
  color: white;
  margin-top: 0;
  margin-bottom: 0px;
  padding: 1px;
  cursor: pointer;
  font-weight: 300;
  display: flex;
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
