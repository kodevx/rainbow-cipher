import type { CryptoFieldInputValues } from '../types/cryptoInputs';

const useCryptoInputs = () => {

    const initialValues: CryptoFieldInputValues = {
        plainText: '',
        SQK1: 1,
        SQK2: 2,
        SQK3: 3,
        SQK4: 4
    }

    return {
        initialValues
    }
}

export default useCryptoInputs;
