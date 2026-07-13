import React from 'react';
import { Formik, Form, Field } from 'formik';
import type { CryptoInputProps } from './types/cryptoInputs';

import Button from '../../components/common/Button';
import SequenceKeyFields from '../SequenceKeyField';

import { validatePlainTextfield } from '../../utils/formValidations';

import useCryptoInputs from './hooks/useCryptoInputs';

const CryptoInputs: React.FC<CryptoInputProps> = (props) => {

    const { handleSubmit } = props;

    const { 
        initialValues
     } = useCryptoInputs();

    return (
        <div className={'font-louis border-2 border-lime-600 flex justify-center items-center p-10'}>
            <Formik
                initialValues={initialValues}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values, actions) => {
                    console.log("Formik callback values: ",values);
                    actions.setSubmitting(false);
                }}
            >
                {({ touched, errors, isSubmitting, handleBlur, handleChange, isValidating }) => (
                    <Form>
                        <div>
                            <Field
                                name={'plainText'}
                                type={'text'}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                validate={validatePlainTextfield}
                                placeholder={'Enter the text to encrypt/decrypt ...'}
                                className={'h-16 w-135 rounded-full shadow-2xl p-5 outline-none text-2xl'}
                            />
                            <div className={'p-5 mt-2'}>
                                {errors.plainText && touched.plainText && <div className={'text-xl text-orange-500'}>{errors.plainText}</div>}
                            </div>
                        </div>
                        {/* <EncryptionButtons /> */}
                        <SequenceKeyFields
                            required={true}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Button 
                            type={'submit'}
                            disabled={isSubmitting || isValidating} 
                            style={'p-5 rounded-full border-3 border-black'}
                        >
                            SUBMIT
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CryptoInputs;
