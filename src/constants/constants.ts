export const RAINBOW_COLORS = ['V','I','B','G','Y','O','R'];

export const ALPHABET_TO_ASCII_LIST = [
    { firstLetter: [65, 97], lastLetter: [71, 103] },   // A: [ASCII OF 'A', ASCII OF 'a'], G: [ASCII OF 'A', ASCII OF 'a'],  (A to G as First Series)
    { firstLetter: [72, 104], lastLetter: [78, 110] },  // H: [ASCII OF 'H', ASCII OF 'h'], N: [ASCII OF 'N', ASCII OF 'n'],  (H to N as Second Series)
    { firstLetter: [79, 111], lastLetter: [85, 117] },  // O: [ASCII OF 'O', ASCII OF 'o'], U: [[ASCII OF 'U', ASCII OF 'u'], (O to U as Third Series)
    { firstLetter: [86, 118], lastLetter: [90, 122] }   // V: [ASCII OF 'V', ASCII OF 'v'], Z: [ASCII OF 'Z', ASCII OF 'z'],  (V to Z as Fourth Series)
]

export const RAINBOW_COLOR_STYLES = {
    'V': 'text-violet-500',
    'I': 'text-indigo-600',
    'B': 'text-blue-400',
    'G': 'text-emerald-500',
    'Y': 'text-yellow-400',
    'O': 'text-orange-500',
    'R': 'text-red-600'
}

export const SEQUENCE_KEY = [1,2,3,4];
