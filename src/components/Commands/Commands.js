import React from 'react';
import Command from "./Command";

const Commands = ({commands}) => {
    return (
        <div>
            <h2>All Commands</h2>
            {commands.map(command =>
                <Command command={command} key={command.id}/>
            )}
        </div>
    );
};

export default Commands;
