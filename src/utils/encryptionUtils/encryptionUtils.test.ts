import { test, expect } from 'vitest';
import { handleColorToAlphabetList } from './encryptionUtils';
import { 
    handleRainbowCipherEncryption, 
    handleRainbowCipherDecryption 
} from './encryptionUtils';

const PLAIN_TEXT = 'gnuz';
const SEQUENCE_KEY = [2,1,3,4]
const CIPHER_TEXT = 'R2R1R3Y4';

const colorToAlphabetList = [{
    [`V${SEQUENCE_KEY[0]}`]: [65, 97],
    [`R${SEQUENCE_KEY[0]}`]: [71, 103]
},{
    [`V${SEQUENCE_KEY[1]}`]: [72, 104],
    [`R${SEQUENCE_KEY[1]}`]: [78, 110]
},{
    [`V${SEQUENCE_KEY[2]}`]: [79, 111],
    [`R${SEQUENCE_KEY[2]}`]: [85, 117]
},{
    [`V${SEQUENCE_KEY[3]}`]: [86, 118],
    [`Y${SEQUENCE_KEY[3]}`]: [90, 122]
}];

test(
    `'${PLAIN_TEXT}' Encryption with Sequence Key (${SEQUENCE_KEY[0]}, ${SEQUENCE_KEY[1]}, ${SEQUENCE_KEY[2]}, ${SEQUENCE_KEY[3]})`,
    () => {
        
        expect(
            handleColorToAlphabetList(SEQUENCE_KEY)
        ).toStrictEqual(colorToAlphabetList)
        
        expect(
            handleRainbowCipherEncryption(PLAIN_TEXT, colorToAlphabetList)
        ).toBe(CIPHER_TEXT)
    }
);

test(
    `${CIPHER_TEXT} Decryption with Sequence Key (${SEQUENCE_KEY[0]}, ${SEQUENCE_KEY[1]}, ${SEQUENCE_KEY[2]}, ${SEQUENCE_KEY[3]})`,
    () => {
        expect(
            handleColorToAlphabetList(SEQUENCE_KEY)
        ).toStrictEqual(colorToAlphabetList)

        expect(
            handleRainbowCipherDecryption(CIPHER_TEXT, SEQUENCE_KEY, colorToAlphabetList)
        ).toBe(PLAIN_TEXT.toUpperCase())
    }
);
