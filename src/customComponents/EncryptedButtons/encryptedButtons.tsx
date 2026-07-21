import React from 'react';
import Button from '../../components/common/Button';

import type { 
    EncryptedButtonsType 
} from './types/encryptedButtons';

import ENCRYPT_ICON from './icons/encryptIcon.png';
import DECRYPT_ICON from './icons/decryptIcon.png';

const EncryptedButtons: React.FC<EncryptedButtonsType> = (props) => {

    const { 
        isBusy,
        formValues,
        handleEncryption,
        handleDecryption
    } = props;

    return (
        <div className={'h-16 w-36 flex justify-around items-center'}>
            <Button 
                type={'submit'} 
                disabled={isBusy}
                handleClick={() => handleDecryption(formValues)}
                style={'p-1 xl:p-2 cursor-pointer hover:transition-tranform hover:ease-in-out hover:duration-200 active:duration-100 hover:scale-125 active:scale-100 disabled:opacity-50 rounded-full hover:bg-linear-to-r from-cyan-400 to-green-300'}
            >
                <img 
                    src={DECRYPT_ICON} 
                    className={'h-7 xl:h-10 w-7 xl:w-10'} 
                    alt={'decrypt-icon'} 
                />
            </Button>
            <span className={'text-2xl xl:text-4xl'}>/</span>
            <Button 
                type={'submit'} 
                disabled={isBusy}
                handleClick={() => handleEncryption(formValues)}
                style={'p-1 xl:p-2 cursor-pointer hover:transition-tranform hover:ease-in-out hover:duration-200 active:duration-100 hover:scale-125 active:scale-100 disabled:opacity-50 rounded-full hover:bg-linear-to-r from-red-200 to-red-600'}
            >
                <img 
                    src={ENCRYPT_ICON} 
                    className={'h-7 xl:h-10 w-7 xl:w-10'} 
                    alt={'encrypt-icon'} 
                />
            </Button>
        </div>
    )
}


export default EncryptedButtons
