
import { Provider } from 'react-redux';
import './App.css';
import MyRoutes from './routes/MyRoutes';
import store from './component/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <MyRoutes />
    </Provider>
  );
}

export default App;
