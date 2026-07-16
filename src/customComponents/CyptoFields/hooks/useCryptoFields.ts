import React from 'react';
import { handleEncryptText } from '../../../utils/encryptionUtils';

const useCryptoFields = () => {

    const handleEncryption = React.useCallback(
        (values) => {
            console.log("form values: ", values);
            const sequenceKeyList = [values.SQK1, values.SQK2, values.SQK3, values.SQK4]
            handleEncryptText(values.plainText, sequenceKeyList);
        },
        []
    )

    const handleDecryption = React.useCallback(
        (values) => {
            console.log("form values: ", values);
            // let sequenceKeyList = 
            // handleDecryption
        },
        []
    );

    return {
        handleEncryption,
        handleDecryption 
    }
}

export default useCryptoFields;
