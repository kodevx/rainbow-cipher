// const SEQUENCE_KEY = [1,2,3,4];
import { ALPHABET_TO_ASCII_LIST } from "../../constants/constants";
import { RAINBOW_COLORS } from "../../constants/constants";

type ColorsCodes = 'V1'|'R1'|'V2'|'R2'|'V3'|'R3'|'V4'|'Y1'|'Y2'|'Y3'|'Y4';
type ColorToAlphabetType = Partial<Record<ColorsCodes, [number, number]>>;

// Encryption Utility Functions

export const handleColorToAlphabetList = (
    sequenceKey: number[]
) => {
    const colorToAlphabet = [] as ColorToAlphabetType[];
    
    ALPHABET_TO_ASCII_LIST.forEach((sequence, index) => {
        if(index + 1 !== 4) {
            colorToAlphabet.push({ 
                [`V${sequenceKey[index]}` as ColorsCodes]: sequence.firstLetter,
                [`R${sequenceKey[index]}` as ColorsCodes]: sequence.lastLetter,
            })
        } else {
            colorToAlphabet.push({ 
                [`V${sequenceKey[index]}` as ColorsCodes]: sequence.firstLetter,
                [`Y${sequenceKey[index]}` as ColorsCodes]: sequence.lastLetter,
            })
        }
    })

    // console.log("colorToAlphabet: ",colorToAlphabet);

    return colorToAlphabet;
} 

export const formatSequenceKeys = (
    key1: number, 
    key2: number, 
    key3: number, 
    key4: number
): number[] => {
    return ([
        key1, 
        key2, 
        key3, 
        key4
    ]);
}

export const handleRainbowCipherEncryption = (
    plainText: string,
    colorToAlphabetList: ColorToAlphabetType[]
): string => {

    let cipherText: string = '';
    const textLength = plainText.length;

    //  Iterates each letter in plainText
    for(let i = 0; i < textLength; i++) {
        // Iterates through each series in color-to-ascii list to identify the color code of the letter to encrypt
        colorToAlphabetList.map((colorToAsciiSeries: ColorToAlphabetType) => {
            
            const firstColorCodeKey = Object.keys(colorToAsciiSeries)[0] as ColorsCodes;
            const secondColorCodekey = Object.keys(colorToAsciiSeries)[1] as ColorsCodes;
            
            // Capital letters of each series
            const firstAlphabetAsciiNumbers = colorToAsciiSeries[firstColorCodeKey]
            const lastAlphabetAsciiNumbers = colorToAsciiSeries[secondColorCodekey]

            const plainTextCharacterAsciiNumber: number = plainText.charCodeAt(i);

            if(firstAlphabetAsciiNumbers && lastAlphabetAsciiNumbers) {
                if(
                    plainTextCharacterAsciiNumber >= firstAlphabetAsciiNumbers[0] && 
                    plainTextCharacterAsciiNumber <= lastAlphabetAsciiNumbers[0]
                ){
                    if(plainTextCharacterAsciiNumber == firstAlphabetAsciiNumbers[0]) {
                        cipherText+=`${Object.keys(colorToAsciiSeries)[0]}` 
                    }
                    else if (plainTextCharacterAsciiNumber == lastAlphabetAsciiNumbers[0]) {
                        cipherText+=`${Object.keys(colorToAsciiSeries)[1]}` 
                    } else {
                        const sequenceKey: string = Object.keys(colorToAsciiSeries)[0];

                        const rainbowColorCodeIndex = plainTextCharacterAsciiNumber - firstAlphabetAsciiNumbers[0];
                        cipherText+=`${RAINBOW_COLORS[rainbowColorCodeIndex]}${sequenceKey[1]}` 
                    }   
                } else if(
                    plainTextCharacterAsciiNumber >= firstAlphabetAsciiNumbers[1] && 
                    plainTextCharacterAsciiNumber <= lastAlphabetAsciiNumbers[1]
                ) {
                    if(plainTextCharacterAsciiNumber == firstAlphabetAsciiNumbers[1]) {
                        cipherText+=`${Object.keys(colorToAsciiSeries)[0]}` 
                    }
                    else if (plainTextCharacterAsciiNumber == lastAlphabetAsciiNumbers[1]) {
                        cipherText+=`${Object.keys(colorToAsciiSeries)[1]}` 
                    } else {
                        const sequenceKey: string = Object.keys(colorToAsciiSeries)[0];

                        const rainbowColorCodeIndex = plainTextCharacterAsciiNumber - firstAlphabetAsciiNumbers[1];
                        cipherText+=`${RAINBOW_COLORS[rainbowColorCodeIndex]}${sequenceKey[1]}` 
                    }   
                }
            }
        })
    }

    return cipherText;
}

