import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    data: [],
};

const indexSlice = createSlice({
    name: 'indexState',
    initialState,
    reducers: {
        addNewNote: (state, action) => {
            state.data.push({ id: uuidv4(), text: action.payload, timestamp: Date.now() });
        },
        deleteTodo: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload);
        },
        editNote: (state, action) => {
            const { id, text } = action.payload;
            const note = state.data.find(item => item.id === id);
            if (note) {
                note.text = text;
                note.timestamp = Date.now(); 
            }
        },
    },
});

export const { addNewNote, deleteTodo, editNote } = indexSlice.actions;
export default indexSlice.reducer;
