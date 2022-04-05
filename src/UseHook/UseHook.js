import React, { useEffect, useState } from 'react';

const UseHook = () => {
    const [reviews,setreviews]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setreviews(data))
    },[])
    return [reviews,setreviews]
};

export default UseHook;