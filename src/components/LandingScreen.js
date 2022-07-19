import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
export default function LandingScreen({ setLanding }) {
    const navigate = useNavigate()
    // Hide landing screen and redirect to home page
    const handleChange = () =>{
        setLanding(false)
        navigate("/")

    }
  return (
    <div className="bg-white justify-content-center w-100 d-flex align-items-center" style={{height:"100vh",}}>
        <div className="text-center">
            <p style={{fontSize:30,fontWeight:'bold'}}>Start your personality trait test</p>
            <Button className="bg-primary text-white" color="inherit" onClick={handleChange}>Start</Button>
        </div>
    </div>
  )
}
