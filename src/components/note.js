import axios from "axios";
import React, { useEffect, useState } from "react";

const Note = () => {
    const [el, setEl] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8081/`)
        .then(res => {
            setEl(res.data)
        })

    }, []);
    return (
        <div>
                    <p>NOTES</p>
            { el?.map(function(data) {
                return (
                    <p key={data?.id}>
                        Note:  { data?.title }
                    </p>
                )
            }) }
        </div>
    );
};

export default Note;