import styled from "styled-components";

import CategoryItem2 from "./CategoryItem2";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";
import Heading from "../components/common/heading/Heading";
const Container = styled.div`
  display: flex;
`;

const Categories = () => {
  const { data, loading, error } = useFetch("/categories");
  return (
    <>
      <Container>
        {data &&
          data.map((item) => <CategoryItem2 item={item} key={item.id} />)}
      </Container>
    </>
  );
};

export default Categories;
