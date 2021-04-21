import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import {
    IconButton
  } from "@chakra-ui/react"
  import {FaHome} from 'react-icons/fa'
export default function PlasmaDonors() {
    
    const [recoveredPatients, setRecoveredPatients] = useState([])
    console.log(recoveredPatients)
    useEffect(() => {
        axios.get('/api/recovered')
        .then(res => {
            setRecoveredPatients(res.data)
            // console.log(recoveredPatients)
        })
    }, [])
    return (
        <div style={{minHeight: '100vh', background: '#0dc5c1'}} className="PlasmaDonorsList">
            <h2 className="text-3xl text-center text-white p-4">
                <Link href="/" passHref>
                    <IconButton colorScheme="blue" className="text-white mx-4" aria-label="Home Button" icon={<FaHome/>}/>
                </Link>
                Plasma Source</h2>
                {
                   recoveredPatients.length>0?(
                    recoveredPatients.map((item) => {
                        const dateObj= new Date(item.dor);
                        var month = dateObj.getUTCMonth() + 1; //months from 1-12
                        var day = dateObj.getUTCDate();
                        var year = dateObj.getUTCFullYear();

                        var date = day + "/" + month + "/" + year;
                        return (
                            <div key={item._id} className="text-xs p-4 bg-white rounded flex flex-wrap justify-evenly m-2">
                            <div className="w-full md:w-3/12">
                                <h3 className="font-bold uppercase text-lg">{item.name}</h3>
                                {
                                    item.age?(
                                        <h6>Age: {item.age}</h6>
                                    ):(<></>)
                                }
                            </div>
                            <div className="w-full md:w-3/12">
                                <h6>State: {item.state}</h6>
                                <h6>City: {item.city}</h6>
                                {
                                    item.contact?(<><h6>Contact: <a href={"tel:+91"+item.contact}>{item.contact}</a> </h6></>):(
                                        <><h6>Social Media ID: {item.id}</h6></>
                                    )
                                }
                            </div>
                            <div className="w-full md:w-3/12">
                                {
                                    item.dor?(
                                        <h6>Date of Recovery: {date}</h6>
                                    ):(<></>)
                                }
                                {
                                    item.bloodgroup?(
                                        <h6>Bloodgroup: {item.bloodgroup}</h6>
                                    ):(<></>)
                                }
                            </div>
                        </div>
                        );
                    })
                   ):(<div className="loader"></div>)
                }
        </div>
    );
}