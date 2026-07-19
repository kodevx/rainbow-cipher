import React from 'react';
import { Field } from 'formik';

import type { SequenceKeyFieldType } from './types/sequenceKeyField';

import { SEQUENCE_KEY_NUMBERS } from './constants/sequenceKeyFields';

import useSequenceKeyField from './hooks/useSequenceKeyField';

const SequenceKeyField: React.FC<SequenceKeyFieldType> = (props) => {

    const {
        handleOnDragStart,
        handleOnDragOver,
        handleOnElementDrop
    } = useSequenceKeyField();

    const keyElements = 
        SEQUENCE_KEY_NUMBERS.map(sequenceKey => (
            <Field
                key={sequenceKey.id} 
                id={`SQK${sequenceKey.id}`} 
                name={`SQK${sequenceKey.id}`}
                type={'text'}
                draggable={true}
                readOnly={true}
                defaultValue={sequenceKey.value}
                onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleOnDragStart(e)} 
                onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleOnDragOver(e)}
                onDrop={(e: React.DragEvent<HTMLInputElement>) => handleOnElementDrop(e)} 
                className={`border-3 text-xl font-alan border-black rounded-full h-10 w-10 text-center hover:border-0 hover:text-white hover:scale-125 hover:transition-transform duration-300 ease-in-out hover:bg-linear-to-r from-amber-500 via-orange-500 to-red-500 cursor-grab outline-none`}
                {...props}
            />
        ));

    return (
        <>
            <div className={'mb-3 ml-2 text-xl flex justify-center items-center tracking-widest'}>
                S E Q U E N C E  
                <span className={'ml-5'}>K E Y</span>
            </div>
            <div className={"border-3 border-black p-2 flex justify-between items-center rounded-full [&:has(:is(#SQK1,#SQK2,#SQK3,#SQK4):hover)_:is(#SQK1,#SQK2,#SQK3,#SQK4)]:border-dashed"}>
                {keyElements}
            </div>
        </>
    )
}

export default SequenceKeyField;
