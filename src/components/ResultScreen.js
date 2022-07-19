import React from 'react'
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
export const ResultScreen = ({screen}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const clickhandle = () =>{
        navigate("/")
    }
    return (
        <>
            <div className='container align-items-left text-left px-6'>
                <div className='row my-3 mx-6'>
                    <div >
                        <p>You are {location.state.result < 40 ? "Introvert" : location.state.result < 60 ? "Neutral" : "Extrovert"} </p>
                    </div>
                    <div>
                        Your Result : {location.state.result.toFixed(0)} %
                    </div>
                    <div className='col-md-6'>
                        <ProgressBar now={location.state.result.toFixed(0)} animated variant={location.state.result < 40 ? "danger" : location.state.result < 60 ? "warning" : "success"} label={`${location.state.result}%`} />
                    </div>
                    <div className='align-items-center py-2 text-center mt-4'>
                        <Button className='bg-primary' data-testid="start-again" onClick={clickhandle}>Start Again</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
