import { configureStore } from '@reduxjs/toolkit';

import adminPageSlice from '../../feature/adminPageSlice';

export default configureStore({
    reducer: {
        adminPages:adminPageSlice
    }
});
