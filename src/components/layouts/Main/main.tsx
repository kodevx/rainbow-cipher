import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode
}

const Main: React.FC<MainLayoutProps> = (props) => {

    return (
        <div className={'h-screen'}>
            {props.children}
        </div>
    )
}

export default Main;
