import React from 'react';

import { RAINBOW_COLOR_STYLES } from '../../../constants/constants';

const CharactersAnimation: React.FC = () => {
  return (
    <div className='flex flex-row font-replay text-6xl'>
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['V']} after:content-["A"] after:animate-uppercasev1-letters-change after:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['I']} after:content-["@"] after:animate-symbols-change after:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['B']} after:content-["b"] after:animate-lowercasev2-letters-change after:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['G']} after:content-["0"] after:animate-numbers-change after:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['Y']} after:content-["f"] after:animate-lowercasev1-letters-change after:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['O']} after:content-["b"] after:animate-lowercasev2-letters-change after:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['R']} after:content-["f"] after:animate-lowercasev1-letters-change after:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['V']} after:content-["0"] after:animate-numbers-change after:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['I']} after:content-["B"] after:animate-uppercasev2-letters-change after:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['B']} after:content-["A"] after:animate-uppercasev1-letters-change after:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['G']} after:content-["@"] after:animate-symbols-change after:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['Y']} after:content-["@"] after:animate-symbols-change afte:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['O']} after:content-["B"] after:animate-uppercasev2-letters-change after:text-6xl mr-0.5`} />
        <div className={`flex justify-center h-30 ${RAINBOW_COLOR_STYLES['R']} after:content-["b"] after:animate-lowercasev2-letters-change after:text-6xl mr-0.5`} />
    </div>
  ) 
}

export default CharactersAnimation;
