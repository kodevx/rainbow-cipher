import React from 'react';
import TextArea from '../../components/common/Textarea';

import type { CryptoOutputsType } from './types/cryptoOutputs';

const CryptoOutputs:React.FC<CryptoOutputsType> = (props) => {

    const { 
        outputText 
    } = props;

    return (
        <div className={'font-louis mt-15 border-pink-300'}>
            <TextArea 
                content={outputText}
                placeholder={'Enter text to either see the encrypted/decrypted text ...'}
                styles={{
                    root: 'h-120 w-250 p-10 text-3xl rounded-xl border-2 border-orange-200 shadow-2xl',
                    placeholder: 'text-2xl text-gray-400'
                }}
            />
        </div>
    )
}

export default CryptoOutputs;
