import React, {PropsWithChildren, ReactChildren} from 'react';

interface IPlayerBarProps {
    name: string,
    count: number
}

const PlayerBar: React.FC<IPlayerBarProps> = ({name, count}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>Matches count: {count}</h3>
        </div>
    );
};

export default PlayerBar;