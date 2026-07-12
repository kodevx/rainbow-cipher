import React from 'react';

import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Footer from './components/layouts/Footer';

import CryptoFields from './customComponents/CyptoFields';

const App: React.FC = () => {

  return (
    <React.Fragment>
      <Header />
      <Main>
        <CryptoFields />
      </Main>
      <Footer />
    </React.Fragment>
  )
}

export default App;
