import React from 'react';

interface MainLayout {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayout> = (props) => {

    return (
        <div>
            {props.children}
        </div>
    )
}

export default MainLayout;
