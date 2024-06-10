import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewNote, deleteTodo, editNote } from './toolkit/Slicer';
import './App.css'; // Import the CSS file

function App() {
    const { data } = useSelector((state) => state.indexState);
    const [inputValue, setInputValue] = useState('');
    const [editMode, setEditMode] = useState(null);
    const dispatch = useDispatch();

    const handleEdit = (id, text) => {
        setEditMode(id);
        setInputValue(text);
    };

    const saveEdit = () => {
        dispatch(editNote({ id: editMode, text: inputValue }));
        setEditMode(null);
        setInputValue('');
    };

    const handleAddNote = () => {
        if (inputValue.trim()) {
            dispatch(addNewNote(inputValue));
            setInputValue('');
        }
    };

    return (
        <div>
            <div className='cvc'>
                <input
                    className='form-control acm'
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    className='btn btn-warning mx-2'
                    onClick={editMode ? saveEdit : handleAddNote}
                >
                    {editMode ? 'Edit Note' : 'Add Note'}
                </button>
            </div>
            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id} className='ddd'>
                        <h1>{item.text}</h1>
                        <p>Edit Time: {new Date(item.timestamp).toLocaleString()}</p>
                        <button className="btn btn-danger" onClick={() => dispatch(deleteTodo(item.id))}>
                            Delete
                        </button> 
                        <button className='btn btn-primary' onClick={() => handleEdit(item.id, item.text)}>Edit</button>
                    </div>
                ))
            ) : (
                <h1>No data...</h1>
            )}
        </div>
    );
}

export default App;
