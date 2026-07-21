import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode
}

const Main: React.FC<MainLayoutProps> = (props) => {

    return (
        <div className={'h-full mb-20'}>
            {props.children}
        </div>
    )
}

export default Main;
