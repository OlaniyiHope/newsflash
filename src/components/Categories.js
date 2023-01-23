import styled from "styled-components";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";
import Heading from "../components/common/heading/Heading";
const Container = styled.div`
  display: block;
  padding: 10px;
`;

const Categories = () => {
  const { data, loading, error } = useFetch("/categories");
  return (
    <>
      <Heading title="Category" />
      <Container>
        {data && data.map((item) => <CategoryItem item={item} key={item.id} />)}
      </Container>
    </>
  );
};

export default Categories;
