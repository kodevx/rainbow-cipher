import React from 'react';

import CryptoInputs from '../CryptoInputs';
import CryptoOutputs from '../CryptoOutputs';

const CryptoFields = (): React.ReactNode => {

    return (
        <div>
            <CryptoInputs />
            <CryptoOutputs />
        </div>
    )
}

export default CryptoFields;
