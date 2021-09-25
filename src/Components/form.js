import React, {useState} from 'react'
import './form.css'
import { TextField , Button } from '@mui/material'





export default function Form() {
    
    const [Data, setData] = useState({
        name : "",
        email:"",
        phone:"",
        address:"",
        message:""
    })

    const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        setData({ ...Data, [name]:value})
    }
    const PostData = async(e)=>{
        const {name,email,phone,address,message} = Data
        const res = await fetch('https://reactformfirebase-default-rtdb.firebaseio.com/ReactFormFirebase.json',
        {
            method : "POST",
            headers:{
                "Content-Type" : "application/json",
            },
            body:  JSON.stringify({
                name ,
                email,
                phone,
                address,
                message
            })
        }

        )
        ClearClicked()
        alert("Form Submitted");
    }
    const ClearClicked =()=>{
        setData({
        name : "",
        email:"",
        phone:"",
        address:"",
        message:""

        })
    }
    return (
        <div className="formDiv">
            <h2 style={{textAlign:"left",padding:"30px 30px"}}>Contact Us</h2>
            <form action="" method="POST">
            <div className="row">
                <div className="col"><TextField onChange={handleChange} name="name" value={Data.name} required id="standard-basic" label="Enter Your Name" variant="standard" /></div>
                <div className="col"><TextField onChange={handleChange} name="email" value={Data.email} required id="standard-basic" label="Enter Your Email" variant="standard" /></div>

            </div>
            
            <div className="row">
                <div className="col"><TextField onChange={handleChange} name="phone" value={Data.phone}  id="standard-basic" label="Enter Your Phone Number" variant="standard" /></div>
                <div className="col"><TextField onChange={handleChange} name="address" value={Data.address} id="standard-basic" label="Enter Your Address" variant="standard" /></div>

            </div>

            <div className="row">
                <div className="col">
                        <TextField onChange={handleChange} name="message" value={Data.message} fullWidth id="standard-multiline-static" label="Message" multiline rows={4}  placeholder="Your Message here" variant="standard" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button className="submitButton" variant="contained" onClick={PostData} >Submit</Button>
                    <Button className="submitButton" variant="contained" onClick={ClearClicked} >Clear</Button>
                </div>
            </div>
            </form>
        </div>
    )
}
