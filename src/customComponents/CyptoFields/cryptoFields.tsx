import React from 'react';

import CryptoInputs from '../CryptoInputs';
import CryptoOutputs from '../CryptoOutputs';

import useCryptoFields from './hooks/useCryptoFields';

const CryptoFields = (): React.ReactNode => {

    const {
        handleEncryption,
        handleDecryption 
    } = useCryptoFields();

    return (
        <div className={'flex flex-col items-center'}>
            <CryptoInputs
                handleEncryption={handleEncryption}
                handleDecryption={handleDecryption} 
            />
            <CryptoOutputs outputText={'Output TEXT ...'} />
        </div>
    )
}

export default CryptoFields;
