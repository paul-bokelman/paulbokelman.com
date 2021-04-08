import * as React from "react";
import { Link } from "gatsby";
import { Container, Content } from "../components";
import { H1 } from "../elements";

const notFound = () => {
  return (
    <Container>
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          This page doesn't exist
        </H1>
        <Link to="/">home</Link>
      </Content>
    </Container>
  );
};

export default notFound;
