import { useEffect, useState } from 'react';
import Joblisting from './joblisting';
import Spinner from './Spinners';

const Joblistings = ({isHome=false}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
      const fechJobs = async () => {
        const apiUrl = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs';
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setJobs(data);
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false)
        }
      }

      fechJobs();
    },[])
    return ( 
        <div>
            <section class="bg-blue-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
          {loading? (<Spinner loading={loading}/>): (
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6" >
              {jobs.map((job) => (
                <Joblisting key={job.id} job={job} />
              ))}
            </div>
          )}
      </div>
    </section>
        </div>
     );
}
 
export default Joblistings;

