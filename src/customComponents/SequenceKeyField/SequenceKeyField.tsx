import React from 'react';

const SEQUENCE_NUMBERS = [
    { value: 1, id: 1 },
    { value: 2, id: 2 },
    { value: 3, id: 3 },
    { value: 4, id: 4 }
];

import useSequenceKeyField from './hooks/useSequenceKeyField';

const SequenceKeyField = (props) => {

    const {
        handleOnDragStart,
        handleOnDragOver,
        handleOnElementDrop
    } = useSequenceKeyField();

    const keyElements = 
        SEQUENCE_NUMBERS.map(key => (
            <input
                key={key.id} 
                type={'text'}
                id={`SQK-${key.id}`} 
                draggable={true}
                disabled={true}
                value={key.value}
                onDragStart={e => handleOnDragStart(e)} 
                onDragOver={e => handleOnDragOver(e)}
                onDrop={e => handleOnElementDrop(e)} 
                className={`border-3 peer-hover:border-dashed text-xl font-alan border-black rounded-full h-10 w-10 text-center hover:bg-linear-to-r from-amber-500 via-orange-500 to-red-500 hover:text-white hover:scale-125 hover:transition-transform duration-300 ease-in-out hover:border-none`} 
            />
        ));

    return (
        <div className={''}>
            <div className={'mb-3 ml-2 text-xl flex justify-center items-center tracking-widest'}>
                S E Q U E N C E  
                <span className={'ml-5'}>K E Y</span>
            </div>
            <div className={'border-3 peer border-black p-2 flex justify-between items-center rounded-full'}>
                {keyElements}
            </div>
        </div>
    )
}

export default SequenceKeyField;
