import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
import type { StoreType } from './storeTypes/store';

export const useStore = create<StoreType>()((set) => ({
    cryptoData: '',
    isEncrypted: false,
    colorToAlphabetList: {},
    
    setCipherText: (payload: string) => {
        set((state) => ({ 
            ...state,
            isEncrypted: true,
            cryptoData: payload
        }))
    },

    setPlainText: (payload: string) => {
        set((state) => ({ 
            ...state,
            isEncrypted: false,
            cryptoData: payload
        }))
    },
}));
