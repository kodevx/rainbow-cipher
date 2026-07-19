type AsciiCodesType = [number, number];

//  { "V1" => [65,97], "R1" => [71,103] }
export type ColorsCodes = 'V1'|'R1'|'V2'|'R2'|'V3'|'R3'|'V4'|'Y4';
export type ColorToAlphabetType = {
    [key in ColorsCodes]?: AsciiCodesType
}

export interface StoreType {
    cipherText: string,
    plainText: string,
    setCipherText: (text: string) => void
}




