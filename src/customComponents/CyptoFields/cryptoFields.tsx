import React from 'react';

import CryptoInputs from '../CryptoInputs';
import CryptoOutputs from '../CryptoOutputs';

import useCryptoFields from './hooks/useCryptoFields';

const CryptoFields = (): React.ReactNode => {

    const {
        isBusy,
        isEncrypted,
        cryptoOutputText,
        handleEncryption,
        handleDecryption 
    } = useCryptoFields();

    return (
        <div className={'flex flex-col items-center'}>
            <CryptoInputs
                handleEncryption={handleEncryption}
                handleDecryption={handleDecryption} 
            />
            <CryptoOutputs 
                isBusy={isBusy}
                isEncrypted={isEncrypted}
                outputText={cryptoOutputText} 
            />
        </div>
    )
}

export default CryptoFields;
