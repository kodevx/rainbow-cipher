import React from 'react';
import { createFileRoute } from '@tanstack/react-router'

import CryptoFields from '../customComponents/CyptoFields';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <React.Fragment>
      <CryptoFields />
    </React.Fragment>
  )
}
