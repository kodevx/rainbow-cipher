export interface CryptoFieldInputValues {
    plainText: string
    SQK1: number | string
    SQK2: number | string
    SQK3: number | string
    SQK4: number | string
}

export interface CryptoInputProps {
    handleEncryption: (values: CryptoFieldInputValues) => void,
    handleDecryption: (values: CryptoFieldInputValues) => void 
}

export interface CryptoFieldsValidationType {
    plainText?: string | null 
}
