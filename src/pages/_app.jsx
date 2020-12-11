import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';

const GlobalStyle = createGlobalStyle`
  body {
    background: black; 
    color: white;
    font-family: "Public Sans";
    padding: 0rem 2rem;
  }
  h1 {
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  background: black;
  display: flex;
`;
const StyledLink = styled.a`
  color: white;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  background: black;
`;
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <GlobalStyle />
      <Nav>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/notes" passHref>
          <StyledLink>Notes</StyledLink>
        </Link>
        <StyledLink href={process.env.HELP_APP_URL}>Help</StyledLink>
      </Nav>
      <Component {...pageProps} />
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
