import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Background = styled.div`
  background-color: #111;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const FooterText = styled(Typography)`
  text-transform: uppercase;
  font-size: 12px;
`;

const FooterHyperLink = styled.a`
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
`;

export const Footer = () => {
  return (
    <Background>
      <FooterText>
        <span>Made with </span>
        <span aria-label="love" role="img">
          ❤️
        </span>
      </FooterText>
      <FooterText>© {new Date().getFullYear()} - <FooterHyperLink
        href='https://www.linkedin.com/in/chris-naismith/'
        target='_blank'
        rel='noreferrer'
      >
        🌲Chris Naismith
      </FooterHyperLink>{` & `}
        <FooterHyperLink
          href='https://www.linkedin.com/in/andrewtclarkson/'
          target='_blank'
          rel='noreferrer'
        >
          Andrew Clarkson
        </FooterHyperLink></FooterText>
    </Background>
  );
};