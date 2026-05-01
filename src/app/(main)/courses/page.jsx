
import CourseCard from '@/components/shared/CourseCard';
import getdata from '@/lib/data';


const Courses = async() => {
   const data = await getdata()
    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>

<h1 className='text-2xl md:text-4xl font-bold text-purple-600 my-10'>All Courses</h1>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
             {
                data?.map(d=> <CourseCard key={d.id} card={d}></CourseCard>)
            }
           </div>
        </div>
    );
};

export default Courses;
