import axios from "axios";
import React, { useEffect, useState } from "react";

const Accueil = () => {
    const [el, setEl] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8082/`)
        .then(res => {
            setEl(res.data)
        })

    }, []);
    return (
        <div>
                    <p>USERS</p>
            { el?.map(function(data) {
                return (
                    <p key={data?.id}>
                        user:  { data?.name }
                    </p>
                )
            }) }
        </div>
    );
};

export default Accueil;