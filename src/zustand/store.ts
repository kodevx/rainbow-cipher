import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
import type { StoreType } from './storeTypes/store';

export const useStore = create<StoreType>()((set) => ({
    plainText: '',
    cipherText: '',
    colorToAlphabetList: {},
    
    setCipherText: (cipherText: string) => {
        set((state) => ({ 
            ...state,
            cipherText
        }))
    }
}));
