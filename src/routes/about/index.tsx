/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { createFileRoute } from '@tanstack/react-router'

import AboutPage from '../../pages/About';

const RouteComponent = () => {
  return (
    <React.Fragment>
      <AboutPage />
    </React.Fragment>
  )
}

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})
