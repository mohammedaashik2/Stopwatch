import React,{useState} from 'react'

function Displayname() {
   
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };
  return (
    <div style={
        {
            padding:"20px"
        }
    }>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
         <label for="fname">First name: </label>
         <input type="text" id="fname" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
         <br />
         <label for="lname">Last name: </label>
         <input type="text" id="lname" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
         <br />
         <button type="submit">Submit</button>
        </form>

        {fullName && (
        <div>
          <p>Full Name: {fullName}</p>
        </div>
      )}

    </div>
  )
}

export default Displayname