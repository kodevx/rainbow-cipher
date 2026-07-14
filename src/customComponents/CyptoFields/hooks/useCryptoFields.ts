import React from 'react';

const useCryptoFields = () => {

    const handleEncryption = React.useCallback(
        (values) => {
            console.log("form values: ", values);
        },
        []
    )

    const handleDecryption = React.useCallback(
        (values) => {
            console.log("form values: ", values);
        },
        []
    );

    return {
        handleEncryption,
        handleDecryption 
    }
}

export default useCryptoFields;
