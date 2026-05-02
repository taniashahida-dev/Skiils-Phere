"use client";

import { useEffect, useState } from "react";
import CourseCard from '@/components/shared/CourseCard';
import getdata from '@/lib/data';

const Courses = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await getdata();
            setData(res);
        };
        fetchData();
    }, []);


    const filteredCourses = data.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            
           <div className="md:flex md:justify-between items-center">
             <h1 className='text-2xl md:text-4xl font-bold text-purple-600 mt-3 md:my-10'>
                All Courses
            </h1>

         
            <input
                type="text"
                placeholder="Search courses..."
                className=" p-3 border my-5 md:my-10 rounded-2xl w-full md:w-1/4"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
           </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    filteredCourses.length > 0
                        ? filteredCourses.map(d => (
                            <CourseCard key={d.id} card={d} />
                        ))
                        : <p>No courses found</p>
                }
            </div>
        </div>
    );
};

export default Courses;