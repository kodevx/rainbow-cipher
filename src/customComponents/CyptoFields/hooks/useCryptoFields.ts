import React from 'react';
import { useStore } from '../../../zustand/store';

import type { CryptoFieldInputValues } from '../../CryptoInputs/types/cryptoInputs';

import {  
    formatSequenceKeys,
    handleColorToAlphabetList,
    handleRainbowCipherEncryption,
    handleRainbowCipherDecryption
} from '../../../utils/encryptionUtils';

const useCryptoFields = () => {

    const { 
        cryptoData, 
        setCipherText, 
        setPlainText 
    } = useStore();

    const handleEncryption = React.useCallback(
        (values: CryptoFieldInputValues) => {
            try {
                console.log("form values: ", values);

                const sequenceKeyList = formatSequenceKeys(
                    values.SQK1, 
                    values.SQK2, 
                    values.SQK3, 
                    values.SQK4
                );

                const colorToAlphabetList = handleColorToAlphabetList(sequenceKeyList);
            
                const cipherText = 
                    handleRainbowCipherEncryption(
                        values.plainText, 
                        colorToAlphabetList
                    );

                setCipherText(cipherText);

                console.log("Cipher Text: ",cipherText);
            } catch(error) {
                console.log("Encryption Error: ",error);
            }
        },
        [setCipherText]
    );

    const handleDecryption = React.useCallback(
        (values: CryptoFieldInputValues) => {
                console.log("form values: ", values);

                const sequenceKeyList = formatSequenceKeys(
                    values.SQK1, 
                    values.SQK2, 
                    values.SQK3, 
                    values.SQK4
                );

                const colorToAlphabetList = handleColorToAlphabetList(sequenceKeyList);
            
                const plainText = 
                    handleRainbowCipherDecryption(
                        values.plainText,
                        sequenceKeyList,
                        colorToAlphabetList
                    );

                setPlainText(plainText);

                console.log("Plain Text: ",plainText);
        },
        []
    );

    return {
        cryptoOutputText: cryptoData,
        handleEncryption,
        handleDecryption 
    }
}

export default useCryptoFields;
