import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/Home';
import Mainlayout from './Layout/mainLayout';
import JobsPage from './Pages/Jobs';
import NotFound from './Pages/Notfound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />} >
      <Route index element={<HomePage/>}  />,
      <Route path='/jobs' element={<JobsPage/>}  />,
      <Route path='*' element={<NotFound/>}  />,
    </Route>
    
  )
)
const App = () => {
  return ( 
    <RouterProvider router={router}/>
   );
}
export default App;
{/* */}