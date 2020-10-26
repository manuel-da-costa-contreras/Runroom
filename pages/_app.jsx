import { AppContextProvider } from '../contexts/AppContext';

import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppContextProvider>
  );
};

export default MyApp;
