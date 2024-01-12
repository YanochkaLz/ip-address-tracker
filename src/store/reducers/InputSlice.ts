import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IText {
	inputText: string;
}

const initialState: IText = {
	inputText: '192.212.174.101',
};

export const inputSlice = createSlice({
	name: 'input',
	initialState,
	reducers: {
		setInput(state, action: PayloadAction<string>) {
			state.inputText = action.payload;
		},
	},
});

export default inputSlice.reducer;