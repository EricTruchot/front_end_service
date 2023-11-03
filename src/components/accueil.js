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
            <div className="link">
                <a href="/authors">Auteurs</a>
                <a href="/notes">Notes</a>
            </div>

        </div>
    );
};

export default Accueil;