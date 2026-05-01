import getdata from '@/lib/data';


const CourseDetails = async() => {
    const data = await getdata()
    return (
        <div>
            {
                data.map(d=><h1 key={d.id}>{d.title}</h1>)
            }
        </div>
    );
};

export default CourseDetails;