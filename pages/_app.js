import { useEffect } from 'react';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Prevent styled-components FOUC (Flash of Unstyled Content)
    const style = document.getElementById('server-side-styles');
    if (style) {
      style.parentNode.removeChild(style);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
