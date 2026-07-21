import React from 'react';
import { Formik, Form, Field } from 'formik';
import type { CryptoInputProps } from './types/cryptoInputs';

import EncryptionButtons from '../../customComponents/EncryptedButtons';
import SequenceKeyFields from '../SequenceKeyField';

import { validatePlainTextfield } from '../../utils/formValidations';

import useCryptoInputs from './hooks/useCryptoInputs';

const CryptoInputs: React.FC<CryptoInputProps> = (props) => {

    const { 
        handleEncryption,
        handleDecryption 
    } = props;

    const { 
        initialValues,
     } = useCryptoInputs();

    return (
        <div className={'font-louis flex justify-center items-center p-10'}>
            <Formik
                initialValues={initialValues}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values, actions) => {
                    // console.log("Formik callback values: ",values);
                    actions.setSubmitting(false);
                }}
            >
                {({ touched, errors, values, isSubmitting, handleBlur, handleChange, isValidating }) => (
                    <Form>
                        <div className={'mb-5'}>
                            <div className={'relative flex justify-center items-center'}>
                                <Field
                                    name={'plainText'}
                                    type={'text'}
                                    autoComplete={'off'}
                                    onChange={handleChange}
                                    validate={validatePlainTextfield}
                                    placeholder={'Enter the text to encrypt/decrypt ...'}
                                    className={'h-5 lg:h-16 w-96 lg:w-180 rounded-full shadow-2xl border-pink-300 p-5 outline-none text-sm lg:text-xl xl:text-2xl'}
                                />
                                <div className={'absolute right-3'}>
                                    <EncryptionButtons 
                                        formValues={values}
                                        isBusy={isSubmitting || isValidating}
                                        handleEncryption={handleEncryption}
                                        handleDecryption={handleDecryption}
                                    />
                                </div>
                            </div>
                            <div className={'p-5 mt-2'}>
                                {errors.plainText && touched.plainText && <div className={'text-xl text-orange-500'}>{errors.plainText}</div>}
                            </div>
                        </div>
                        <SequenceKeyFields
                            required={true}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CryptoInputs;
