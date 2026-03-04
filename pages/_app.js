import { useEffect } from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import WhatsAppFloat from '../components/WhatsAppFloat';

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
      <WhatsAppFloat />
    </>
  );
}

export default MyApp;
