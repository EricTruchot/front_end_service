import axios from "axios";
import React, { useEffect, useState } from "react";

const Author = () => {
    const [el, setEl] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8081/author`)
        .then(res => {
            setEl(res.data)
        console.log(res.data);

        })
    }, []);
    return (
        <div>
             <p>Author</p>
                 { el?.map(function(data) {
                 return (
                     <p key={data?.id}>
                         author:  { data?.name }
                     </p>
                 )
            }) }
        </div>
    );
};

export default Author;