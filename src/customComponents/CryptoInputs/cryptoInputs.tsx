import React from 'react';
import { Formik, Form, Field } from 'formik';

import SequenceKeyField from '../SequenceKeyField';
import useCryptoInputs from './hooks/useCryptoInputs';

import type { CryptoInputProps } from './types/cryptoInputs';

const CryptoInputs: React.FC<CryptoInputProps> = (props) => {

    const { handleSubmit } = props;

    const { 
        initialValues,
        handleValidation,
     } = useCryptoInputs();

    return (
        <div className={'font-louis border border-2 border-lime-600 flex justify-center items-center p-10'}>
            <Formik
                validateOnChange={false}
                initialValues={initialValues}
                validate={handleValidation}
                onSubmit={(values) => console.log("values: ",values) /* handleSubmit */}
            >
                {({ touched, errors, isValidating, handleBlur, handleChange, handleSubmit }) => (
                    <Form>
                        <div>
                            <Field
                                name={'plainText'}
                                type={'text'}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder={'Enter the text to encrypt/decrypt ...'}
                                className={'h-16 w-135 rounded-full shadow-2xl p-5 outline-none text-2xl'}
                            />
                            <div className={'p-5 mt-2'}>
                                {touched.plainText && errors.plainText && <div className={'text-xl text-red-500'}>{errors.plainText}</div>}
                            </div>
                        </div>
                        {/* <EncryptionButtons /> */}
                        <div>
                            <SequenceKeyField 
                                name={'sequenceKey'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={'Enter the Sequence Key'}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CryptoInputs;
