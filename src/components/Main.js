import React, {useContext, useState} from "react";
import {CommanderContext} from '../context/commander/commanderContext';
import Commands from "./Commands/Commands";
import Command from "./Commands/Command";

const Main = () => {

    const [commandId, setCommandId] = useState('0');
    const [createForm, setCreateForm] = useState({howTo: '', line: '', platform: ''});
    const [showForm, setShowForm] = useState(false);

    const commandContext = useContext(CommanderContext);
    const {createCommand, getCommands, commands, getCommand, command, clearUI} = commandContext;

    const renderCommands = () => {
        return (
            <div>
                {(commands !== null && commands.length > 0)
                &&
                <Commands commands={commands}/>
                }
                {(command !== null)
                &&
                (<div>
                    <h2>Command #{command.id}</h2>
                    <Command command={command}/>
                </div>)
                }
                {(commands === null && command === null)
                &&
                <p>There is no command yet!</p>
                }
            </div>);
    }

    return (
        <div className='container d-flex justify-content-center pt-5 flex-column'>
            <div className="row">
                <div className="col-5">
                    <button className="btn btn-primary" onClick={() => {
                        createCommand(createForm);
                        setCreateForm({howTo: '', line: '', platform: ''});
                    }} disabled={!showForm}>Create</button>
                    <button className="btn btn-dark ml-4" onClick={() => setShowForm(!showForm)}>Show Form</button>
                </div>
                <div className={showForm ? "col-8 my-2" : "d-none"}>
                    <input type="text" className="form-control my-2" value={createForm.howTo}  onChange={(event) =>
                        setCreateForm({...createForm, howTo: event.target.value})} placeholder='description'/>
                    <input type="text" className="form-control my-2" value={createForm.line}  onChange={(event) =>
                        setCreateForm({...createForm, line: event.target.value})} placeholder='line'/>
                    <input type="text" className="form-control my-2" value={createForm.platform}  onChange={(event) =>
                        setCreateForm({...createForm, platform: event.target.value})} placeholder='platform'/>
                </div>
            </div>
            <div className="my-4">
                <div className="row">
                    <div className="col-4 mb-4">
                        <button className="btn btn-info" onClick={getCommands}>Get Commands</button>
                    </div>
                    <div className="col-4 mb-4">
                        <button className="btn btn-success" onClick={() => {
                            if (commandId !== null)
                                getCommand(commandId)
                        }}>Get a Command
                        </button>
                        <div className="mt-2">
                            <input type="number" value={commandId}
                                   onChange={(event) => setCommandId(event.target.value)}/>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <button className="btn btn-warning" onClick={clearUI}>Clear UI</button>
                    </div>

                    <div className="col-4 mb-4">
                        <button className="btn btn-secondary">Update Command</button>
                        <div className="mt-2">
                            <input type="number" value={commandId}
                                   onChange={(event) => setCommandId(event.target.value)}/>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <button className="btn btn-info">Patch a Command</button>
                        <div className="mt-2">
                            <input type="number" value={commandId}
                                   onChange={(event) => setCommandId(event.target.value)}/>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <button className="btn btn-danger">Delete</button>
                        <div className="mt-2">
                            <input type="number" value={commandId}
                                   onChange={(event) => setCommandId(event.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
            {renderCommands()}
        </div>
    );
};

export default Main;