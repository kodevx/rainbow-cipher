import React from 'react';
import TextArea from '../../components/common/Textarea';

import type { 
    CryptoOutputsType, 
    textElementsType,
    OutputTextHtmlElementsType 
} from './types/cryptoOutputs';

const formatTextAsHtmlElements = (text: string): OutputTextHtmlElementsType => {
    const elements: OutputTextHtmlElementsType = [];

    for(let i = 0; i < text.length; i+=2) {
        elements.push(
            <div key={i} className={'mr-2 text-3xl'}>
                {text.charAt(i)}
                <sub className={'text-xl'}>{text.charAt(i + 1)}</sub>
            </div>
        )
    }

    return elements;
}


const CryptoOutputs: React.FC<CryptoOutputsType> = (props) => {

    const { 
        isEncrypted,
        outputText 
    } = props;

    const textElements: textElementsType = 
        isEncrypted 
            ? formatTextAsHtmlElements(outputText) 
            : outputText

    return (
        <div className={'font-louis mt-12 xl:mt-15 border-pink-300'}>
            <TextArea 
                content={textElements}
                placeholder={'Enter text to either see the encrypted/decrypted text ...'}
                styles={{
                    root: 'h-70 lg:h-96 xl:h-120 w-90 lg:w-180 xl:w-250 p-4 xl:p-10 text-3xl font-700 rounded-xl border-2 border-orange-200 shadow-2xl flex overflow-auto',
                    placeholder: 'text-lg xl:text-2xl text-gray-400'
                }}
            />
        </div>
    )
}

export default CryptoOutputs;
