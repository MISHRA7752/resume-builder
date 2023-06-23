import Form from './Containers/Form'
import Resume from './Containers/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Containers/store';
const App = () => {
  return (
    <Provider store={store}>      
      <BrowserRouter>
        <Routes>
          <Route  path="/" Component={Form} />
          <Route  path="/Resume" Component={Resume} />
          <Route path="*" element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

