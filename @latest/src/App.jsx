import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/Home';
import Mainlayout from './Layout/mainLayout';
import JobsPage from './Pages/Jobs';

import NotFound from './Pages/Notfound';
import EditJobPage from './Pages/EditJobPage';
import JobPage, {jobLoader} from './Pages/JobPage';
import AddJobPage from './Pages/AddjobPage';


const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch ('/api/jobs/', { 
      method : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newJob),
    })
    return 
  
  }
  const updateJob = async (job) => {
    const res = await fetch (`/api/jobs/${job.id}`, { 
      method : 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job),
    })
    return 
  
  }

  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, { method: 'DELETE' })
    return
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />} >
        <Route index element={<HomePage/>}  />,
        <Route path='/jobs' element={<JobsPage/>}  />,
        <Route path='/edit-job/:id' element={<EditJobPage updatedJobSubmit={updateJob}/>} loader={jobLoader} />,
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}  />,
        <Route path='/job/:id' element={<JobPage  deleteJob={deleteJob} />} loader={jobLoader} />,
        <Route path='*' element={<NotFound/>}  />,
      </Route>
      
    )
  )
  return ( 
    <RouterProvider router={router}/>
   );
}
export default App;
{/* */}