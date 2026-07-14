import type { CryptoFieldInputValues } from "../../CryptoInputs/types/cryptoInputs";

export interface EncryptedButtonsType {
    isBusy: boolean
    formValues: CryptoFieldInputValues,
    handleEncryption: (values: CryptoFieldInputValues) => void,
    handleDecryption: (values: CryptoFieldInputValues) => void 
}
