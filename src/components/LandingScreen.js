import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
export default function LandingScreen({ setLanding }) {
    const navigate = useNavigate()
    const handleChange = () =>{
        setLanding(false)
        navigate("/")

    }
  return (
    <div className="position-absolute bg-white justify-content-center w-100 d-flex align-items-center" style={{height:"100vh",}}>
        <div>
            <Button className="bg-primary text-white" color="inherit" onClick={handleChange}>Start</Button>
        </div>
    </div>
  )
}
