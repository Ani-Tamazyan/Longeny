import {  RouterProvider } from 'react-router-dom';

import './styles/Global.css';
import router from './router/routes';


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;




