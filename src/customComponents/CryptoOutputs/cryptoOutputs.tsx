import React from 'react';
import TextArea from '../../components/common/Textarea';

import type { CryptoOutputsType } from './types/cryptoOutputs';

const CryptoOutputs:React.FC<CryptoOutputsType> = (props) => {

    const { outputText } = props;

    return (
        <div className={'font-louis mt-15 border-pink-300'}>
            <TextArea 
                content={outputText}
                styles={{
                    root: 'h-120 w-250 p-7 text-2xl rounded-xl border-2 border-orange-200 shadow-2xl',
                    placeholder: 'text-2xl'
                }}
                placeholder={'Decrypted Text ...'}
            />
        </div>
    )
}

export default CryptoOutputs;
