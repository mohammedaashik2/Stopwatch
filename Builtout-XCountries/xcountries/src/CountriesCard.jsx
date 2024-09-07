import React from 'react'

function CountriesCard({name,flagImg,flagAlt}) {
  return (
    <div
    style={
        {
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems:'center',
            padding:'10px',
            margin:'10px',
            border:'1px solid grey',
            borderRadius:'4px',
            width:'200px',
            height:'200px',

        }
    }
    
    >
       <img src={flagImg} 
        alt={`flag of ${flagAlt}`}
        style={
            {
                width:"100px",
                height:"100px",
            }
        }
        />
       <h2>{name}</h2>
    </div>
  )
}

export default CountriesCard