import React from 'react';

import CryptoInputs from '../../customComponents/CryptoInputs';
import CryptoOutputs from '../../customComponents/CryptoOutputs';

const Home = (): React.ReactNode => {

    return (
        <div>
            <div className={'text-4xl'}>
                <div className={'font-louis'}>
                    R A I N B O W  C I P H E R
                </div>
            </div>
            <CryptoInputs />
            <CryptoOutputs />
        </div>
    )
}

export default Home;
