// [{ "A" => [65,97], "G" => [71,103] }]
type Alphabets = 'A'|'G'|'H'|'N'|'O'|'U'|'V'|'Z'
type AsciiCodesType = [number, number];
export type AlphabetToAsciiType = {
    [key in Alphabets]: AsciiCodesType
}

//  { "V1" => [65,97], "R1" => [71,103] }
export type ColorsCodes = 'V1'|'R1'|'V2'|'R2'|'V3'|'R3'|'V4'|'Y4';
export type ColorToAlphabetType = {
    [key in ColorsCodes]?: AsciiCodesType
}

export interface StoreType {
    cipherText: string,
    plainText: string,
    colorToAlphabetList: ColorToAlphabetType
}




