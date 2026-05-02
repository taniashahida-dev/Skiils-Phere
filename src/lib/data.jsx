



const getdata = async () => {


const res = await fetch("http://localhost:3000/data/courses.json", {
  cache: "no-store",
});
    return res.json()
};

export default getdata;
