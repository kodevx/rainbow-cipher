import { Link } from '@tanstack/react-router';
import React from 'react';

const Header = (props) => {

    return (
        <div className={'pt-30 pb-15 flex justify-center items-center'}>
            <div className={'text-4xl'}>
                <Link to={'/'} className={'font-louis'}>
                    <span className={'mr-4'}>R A i N B O W </span> 
                    <span>C i P H E R</span>
                </Link>
            </div>
        </div>
    )
}

export default Header;
