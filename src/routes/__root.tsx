import React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';

import Header from '../components/layouts/Header';
import Main from '../components/layouts/Main';
import Footer from '../components/layouts/Footer';

export const Route = createRootRoute({
  component: RootComponent,
  // notFoundComponent: () => <NotFound />,
})

function RootComponent () {

  return (
    <React.Fragment>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </React.Fragment>
  )
}

