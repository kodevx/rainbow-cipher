export interface CryptoFieldInputValues {
    plainText: string
    SQK1: number 
    SQK2: number 
    SQK3: number
    SQK4: number
}

export interface CryptoInputProps {
    handleEncryption: (values: CryptoFieldInputValues) => void,
    handleDecryption: (values: CryptoFieldInputValues) => void 
}

export interface CryptoFieldsValidationType {
    plainText?: string | null 
}
