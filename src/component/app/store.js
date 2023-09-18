import { configureStore } from '@reduxjs/toolkit';

import adminPageSlice from '../../feature/adminPageSlice';
import widthSizeSlice from '../../feature/widthSizeSlice';
import scrollSlice from '../../feature/scrollSlice';
import loginCheckSlice from "../main/ducks/loginCheck";
import ownerRoomSlice from '../../feature/ownerRoomSlice';
import userSlice from '../../feature/userSlice';

export default configureStore({
    reducer: {
        adminPages: adminPageSlice,
        widthSizes: widthSizeSlice,
        scrolls: scrollSlice,
        loginCheck: loginCheckSlice,
        ownerRoom: ownerRoomSlice,
        user: userSlice
    }
});
