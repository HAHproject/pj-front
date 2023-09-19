import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../component/admin/Category";

const initialState = { room: [] };

export const ownerRoomSlice = createSlice({
    name: "ownerRoom",
    initialState,
    reducers: {
        setRoom: (state, data) => {
            const { num, accoId } = data.payload

            state.room = [...state.room, { id: num, accoId: accoId, flag: false }]


        },


        setData: (state, data) => {

            state.room = data.payload

        }

    },
});

export const { setRoom, setData } = ownerRoomSlice.actions;

export default ownerRoomSlice.reducer;