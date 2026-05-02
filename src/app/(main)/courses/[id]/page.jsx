"use client";

import { useEffect, useState } from "react";
import DetailsCard from "@/components/shared/DetailsCard";

const CourseDetails = ({ params }) => {
  const [data, setData] = useState([]);
  const [findData, setFindData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/courses.json");
      const result = await res.json();
      setData(result);

      const found = result.find((item) => item.id == params.id);
      setFindData(found);
    };

    fetchData();
  }, [params.id]);

  if (!findData) {
    return <p>Loading...</p>;
  }

  return <DetailsCard findData={findData} />;
};

export default CourseDetails;