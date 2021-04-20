import React, {useEffect, useState} from 'react'
import axios from 'axios'
export default function OxygenSuppliers() {
    
    const [oxygenSupply, setOxygenSupply] = useState([])
    console.log(oxygenSupply)
    useEffect(() => {
        axios.get('/api/oxygen')
        .then(res => {
            setOxygenSupply(res.data)
            // console.log(oxygenSupply)
        })
    }, [])
    return (
        <div className="OxygenProvidersList">
            <h2 className="text-3xl text-center p-4">Oxygen Providers List</h2>
                {
                    oxygenSupply.map((item) => {
                        return (
                            <div key={item._id} className="text-xs p-4 bg-white rounded flex flex-wrap justify-evenly m-2">
                            <div className="w-full md:w-3/12">
                                <h3 className="font-bold uppercase text-lg">{item.name}</h3>
                            </div>
                            <div className="w-full md:w-3/12">
                                <h6>State: {item.state}</h6>
                                <h6>City: {item.city}</h6>
                            </div>
                            <div className="w-full md:w-3/12">        
                                <h6>Contact: <a href={"tel:+91"+item.contact}>{item.contact}</a></h6>
                            </div>
                        </div>
                        );
                    })
                }
        </div>
    );
}