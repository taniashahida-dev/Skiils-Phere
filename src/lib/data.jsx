

const getdata = async () => {
  const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://skills-phere.vercel.app";

const res = await fetch(`${baseUrl}/data/courses.json`, {
  cache: "no-store",
});
    return res.json()
};

export default getdata;