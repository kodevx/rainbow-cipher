import React from 'react';
import type { 
    CryptoFieldInitialValues, 
    CryptoFieldsValidationType 
} from '../types/cryptoInputs';

import { validateTextfield } from '../../../utils/formValidations';

const useCryptoInputs = () => {

    const handleValidation = React.useCallback((values: CryptoFieldInitialValues) => {
        const errors: CryptoFieldsValidationType = {};

        errors.plainText = validateTextfield(values.plainText)

        return errors;
    }, []);

    const initialValues: CryptoFieldInitialValues = {
        plainText: ''
    }

    return {
        initialValues,
        handleValidation
    }
}

export default useCryptoInputs;
