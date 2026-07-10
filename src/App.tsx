import React from 'react';
import MainLayout from './components/layouts/MainLayout';
import Footer from './components/layouts/Footerß';

const App: React.FC = () => {

  return (
    <React.Fragment>
      <MainLayout>
        <div className={'text-4xl'}>
          <div className={'font-louis'}>
            R A I N B O W  C I P H E R
          </div>
        </div>
      </MainLayout>
      <Footer />
    </React.Fragment>
  )
}

export default App;
