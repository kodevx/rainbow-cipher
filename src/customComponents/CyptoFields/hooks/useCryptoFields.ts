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
        isEncrypted,
        setCipherText, 
        setPlainText 
    } = useStore();

    const [isBusy, setIsBusy] = React.useState<boolean>(false);

    const handleEncryption = React.useCallback(
        (values: CryptoFieldInputValues) => {
            try {
                setIsBusy(true);
                // console.log("form values: ", values);
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
                // console.log("Cipher Text: ",cipherText);
            } catch(error) {
                console.log("Text Encryption Error: ",error);
            } finally {
                setTimeout(() => setIsBusy(false), 900);
            }
        },
        [setCipherText, setIsBusy]
    );

    const handleDecryption = React.useCallback(
        (values: CryptoFieldInputValues) => {
            try {
                setIsBusy(true);
                // console.log("form values: ", values);

                const sequenceKeyList = formatSequenceKeys(
                    values.SQK1, 
                    values.SQK2, 
                    values.SQK3, 
                    values.SQK4
                );

                const colorToAlphabetList = handleColorToAlphabetList(sequenceKeyList);
            
                const formattedText = values.plainText.replace(/ +/g, "")

                const plainText = 
                    handleRainbowCipherDecryption(
                        formattedText,
                        sequenceKeyList,
                        colorToAlphabetList
                    );

                setPlainText(plainText);
                // console.log("Plain Text: ",plainText);
            } catch(error) {
                console.log("Text Decryption Errors: ",error);
            } finally {
                setTimeout(() => setIsBusy(false), 900);
            }
        },
        [setIsBusy, setPlainText]
    );

    return {
        isBusy,
        cryptoOutputText: cryptoData,
        isEncrypted,
        handleEncryption,
        handleDecryption, 
    }
}

export default useCryptoFields;
