import React from 'react'
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const ResultScreen = () => {
    // Used useLocation hook to get data from navigate
    const location = useLocation();
    const navigate = useNavigate();

    // Navigate to home page
    const clickhandle = () =>{
        navigate("/")
    }
    return (
        <>
            <div className='container align-items-left text-left px-6'>
                <div className='row my-3 mt-5 mx-6 justify-content-center'>
                    <div className="col-md-6 mt-5">
                        <div className='col-md-12'>
                            {/* user status */}
                            <p>You are {location.state.result < 40 ? "Introvert" : location.state.result < 60 ? "Neutral" : "Extrovert"} </p>
                        </div>
                        <div className='col-md-12'>
                            {/* user status percentage */}
                            Your Result : {location.state.result.toFixed(0)} %
                        </div>
                        <div className='col-md-12'>
                            {/* show status using progress bar  */}
                            <ProgressBar now={location.state.result.toFixed(0)} animated variant={location.state.result < 40 ? "danger" : location.state.result < 60 ? "warning" : "success"} label={`${location.state.result.toFixed(0)}%`} />
                        </div>
                    </div>
                    <div className='align-items-center py-2 text-center mt-4'>
                        <Button className='bg-primary' data-testid="start-again" onClick={clickhandle}>Start Again</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultScreen;
