

const getdata = async () => {
  const res = await fetch("https://skills-phere.vercel.app/data/courses.json", {
    cache: "no-store",
  });
    return res.json()
};

export default getdata;