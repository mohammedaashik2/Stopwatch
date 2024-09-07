import React, { useEffect, useState } from 'react'
import axios from "axios";
import CountriesCard from './CountriesCard'

function Countries() {
    const [flags,setFlags] = useState([]);

    useEffect(()=>{
        axios.get('https://xcountries-backend.azurewebsites.net/all')
        .then(response=> setFlags(response.data))
        .catch(error=>console.error( "Error fetching data:", error))
    },[])
  return (
    <div
    style={{
       display:'flex',
       flexWrap:'wrap'

    }
    }>
        {flags.map((flag)=>(
            <CountriesCard 
            key={flag.abbr} 
            name={flag.name} 
            flagImg={flag.flag} 
            flagAlt={flag.abbr} />
        ))}
    </div>
  )
}

export default Countries