import Banner from "@/components/homepage/Banner";
import LearningTips from "@/components/homepage/LearningTips";
import PopularCourses from "@/components/homepage/PopularCourses";
import TopInstrustor from "@/components/homepage/TopInstrustor";
import TrandingCourse from "@/components/homepage/TrandingCourse";


export default function Home() {
  return <div>
    <Banner></Banner>
    <PopularCourses></PopularCourses>
  <LearningTips></LearningTips>
  <TopInstrustor></TopInstrustor>
  <TrandingCourse></TrandingCourse>
  </div>
}
