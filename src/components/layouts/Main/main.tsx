import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode
}

const Main: React.FC<MainLayoutProps> = (props) => {

    return (
        <div className={'h-screen border-2 border-emerald-600'}>
            {props.children}
        </div>
    )
}

export default Main;
