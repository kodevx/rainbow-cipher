const SEQUENCE_KEY = [1,2,3,4];
import { ALPHABET_TO_ASCII_LIST } from "../constants/constants";

type ColorsCodes = 'V1'|'R1'|'V2'|'R2'|'V3'|'R3'|'V4'|'Y4';
type ColorToAlphabetType = {
    [key in ColorsCodes]?: [number, number]
}

const handleColorToAlphabetList = (sequenceKey = SEQUENCE_KEY) => {
    const colorToAlphabet: ColorToAlphabetType[] = [];

    ALPHABET_TO_ASCII_LIST.map((sequence, index) => {
        if(index + 1 !== 4) {
            colorToAlphabet.push({ 
                [`V${sequenceKey[index]}`]: sequence.firstLetter,
                [`R${sequenceKey[index]}`]: sequence.lastLetter,
            })
        } else {
            colorToAlphabet.push({ 
                [`V${sequenceKey[index]}`]: sequence.firstLetter,
                [`Z${sequenceKey[index]}`]: sequence.lastLetter,
            })
        }
    })

    console.log("colorToAlphabet: ",colorToAlphabet);
} 

export const handleEncryptText = (plainText, sequenceKey) => {
    console.log("handle encryption block")
    console.log("argument: ",plainText, sequenceKey);

    handleColorToAlphabetList(sequenceKey);

    

}