import React, { useState,useEffect } from 'react';
import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import { DateObject } from "react-multi-date-picker";
import Axios from "axios";
const Calend = () =>{

   // const getVac 🙁)=>{
   //     Axios.get('http://localhost:3001/')
   //         .then( response => console.log("gg")
   //
   // };
    useEffect(() => {
        // getVac();
    });

    const [value, setValue] = useState(new DateObject("2021-05-03"))
    const [values, setValues] = useState([
        new DateObject().subtract(4, "days"),
        new DateObject().add(4, "days")
    ])
    return (
        <Calendar
            value={[
                new DateObject("2021-05-03"),
                new DateObject( "2021-05-20" )]
            }
            range
            readOnly
        />
    )

};
export default Calend;