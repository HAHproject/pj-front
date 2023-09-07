import { configureStore } from '@reduxjs/toolkit';

import adminPageSlice from '../../feature/adminPageSlice';
import widthSizeSlice from '../../feature/widthSizeSlice';

export default configureStore({
    reducer: {
        adminPages: adminPageSlice,
        widthSizes: widthSizeSlice
    }
});
