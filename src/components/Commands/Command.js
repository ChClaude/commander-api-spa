import React from 'react';

const Command = ({command}) => {
    return (
        <div className="d-flex" key={command.id}>
            <div className="w-25">{command.howTo}:</div>
            <span className="font-weight-bold">{command.line}</span>
        </div>
    );
};

export default Command;
