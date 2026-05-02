import React from 'react';

const getdata = async () => {
    const  res = await fetch('/data/courses.json',{cache: "no-store"})

    return res.json()
};

export default getdata;