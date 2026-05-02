import CourseCard from '@/components/shared/CourseCard';
import getdata from '@/lib/data';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { MdArrowForward } from 'react-icons/md';

const PopularCourses =async () => {
     const data = await getdata()
    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>

<div className='flex justify-between items-center'>
    <div className='my-4'>
    <h1 className="text-2xl font-bold">Popular Courses</h1>
<p className="text-gray-400 text-sm">Highest rated by students this week</p>
</div>
<Link href={'/courses'}><button className='flex items-center text-purple-500 text-xl  hover:border-b-2 border-b-purple-500 cursor-pointer'>View all<MdArrowForward /></button></Link>
</div>

           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
             {
                data?.slice(-4).map(d=> <CourseCard key={d.id} card={d}></CourseCard>)
            }
           </div>
        </div>
    );
};

export default PopularCourses;