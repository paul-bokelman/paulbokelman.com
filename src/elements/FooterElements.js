import styled from "styled-components";

export const FooterWrapper = styled.footer`
  font-size: 20px;
  margin-bottom: -15px;
  align-items: left;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    margin-right: 1vw;
    transition: 0.3s ease-in;
    &:hover {
      color: #666666;
    }
  }
`;
