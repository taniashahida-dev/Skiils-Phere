



const getdata = async () => {


const res = await fetch("https://skiils-phere.vercel.app/data/courses.json", {
  cache: "no-store",
});
    return res.json()
};

export default getdata;
