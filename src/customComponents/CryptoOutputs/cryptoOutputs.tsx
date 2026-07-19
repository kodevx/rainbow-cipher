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
                placeholder={'Enter text to either see the encrypted cipher or decrypted  plain text ...'}
                styles={{
                    root: 'h-120 w-250 p-7 text-3xl font-black rounded-xl border-2 border-orange-200 shadow-2xl',
                    placeholder: 'text-2xl'
                }}
            />
        </div>
    )
}

export default CryptoOutputs;
