
import DetailsCard from "@/components/shared/DetailsCard";
import getdata from "@/lib/data";

const CourseDetails = async ({ params }) => {
  const param = await params;

  const courses = await getdata();
  const findData = courses.find((data) => data.id == param.id);
  console.log(findData);

 
  return (
   
    <DetailsCard findData={findData}></DetailsCard>
  );
};

export default CourseDetails;
