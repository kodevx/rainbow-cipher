import React from 'react';
import { useStore } from '../../../zustand/store';

import type { CryptoFieldInputValues } from '../../CryptoInputs/types/cryptoInputs';

import {  
    formatSequenceKeys,
    handleColorToAlphabetList,
    handleRainbowCipherEncryption
} from '../../../utils/encryptionUtils';

const useCryptoFields = () => {

    const { cipherText, setCipherText } = useStore();

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
            
                console.log("colorToAlphabetList: ",colorToAlphabetList);

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
        (values) => {
            console.log("form values: ", values);
            // let sequenceKeyList = 
            // handleDecryption
        },
        []
    );

    return {
        cryptoOutputText: cipherText,
        handleEncryption,
        handleDecryption 
    }
}

export default useCryptoFields;
