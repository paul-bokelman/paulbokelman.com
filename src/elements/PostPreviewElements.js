import styled from "styled-components";

export const PostPreviewWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  a {
    text-decoration: none;
  }
`;

export const Card = styled.div`
  height: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.background};
  transition: 0.1s;
  &:hover {
    filter: brightness(120%);
  }
  h1 {
    color: ${(props) => props.theme.colors.primary};
    display: inline;
    text-align: left;
    font-size: 1.4rem;
  }
  h2 {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.2rem;
    font-weight: 400;
  }
  h3 {
    color: ${(props) => props.theme.colors.secondary};
  }

  img {
    width: 100%;
    border-radius: 5px;
    margin: 0.4rem 0;
  }
  .external-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0.4rem 0;
    vertical-align: middle;

    p {
      text-align: left;
      color: ${(props) => props.theme.colors.secondary};
    }
    div {
      text-align: right;
    }
  }
`;
