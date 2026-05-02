"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DetailsCard from "@/components/shared/DetailsCard";

const CourseDetails = () => {
  const params = useParams(); // ✅ correct way
  const [findData, setFindData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/courses.json");
      const result = await res.json();

      console.log("params:", params);
      console.log("data:", result);

      const found = result.find(
        (item) => String(item.id) === String(params.id)
      );

      setFindData(found);
    };

    if (params?.id) {
      fetchData();
    }
  }, [params]);

  if (!findData) {
    return <div className="flex justify-center min-h-[80vh] items-center"><span className="loading loading-dots loading-xl"></span></div>;
  }

  return <DetailsCard findData={findData} />;
};

export default CourseDetails;