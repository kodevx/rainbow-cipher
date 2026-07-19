import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
import type { StoreType } from './storeTypes/store';

export const useStore = create<StoreType>()((set) => ({
    cryptoData: '',
    colorToAlphabetList: {},
    
    setCipherText: (payload: string) => {
        set((state) => ({ 
            ...state,
            cryptoData: payload
        }))
    },

    setPlainText: (payload: string) => {
        set((state) => ({ 
            ...state,
            cryptoData: payload
        }))
    },
}));
