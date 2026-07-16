import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
import { handleEncryption } from '../utils/encryptionUtils';
import type { StoreType } from './storeTypes/store';

export const useStore = create<StoreType>()((set) => ({
    plainText: '',
    cipherText: '',
    colorToAlphabetList: {},
    encryptText: (plainText, sequenceKey) => {
        const encryptedText = handleEncryption(plainText, sequenceKey);

        // set((state) => ({ 
        //     ...state,
        //     cipherText: encryptedText 
        // }))
    },
    // decryptText: (plainText) => {
    //     const decryptedText = handleDecryption(plainText);

    //     set((state) => ({ 
    //         ...state,
    //         plainText: decryptedText
    //     }))
    // },
}));
