import React, { useState } from 'react'
import sampledata from '../data/sampleData';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
export default function HomeScreen() {
    const [arrIndex, setArrIndex] = useState([]);
    const [optionArr, setOptionArr] = useState([])
    let navigate = useNavigate();
    // collect data on click function
    const handleChange = (ans, index) => {
        setArrIndex([...arrIndex, index]);
        setOptionArr([...optionArr, ans]);
        

    }

    // Redirect to result screen with resul
    const handleSubmit = () =>{
        let res = 0;
        optionArr && optionArr.map((item,index)=>{
            res = res + parseInt(item.point)
        })
        navigate("/result", {state:{result : res/optionArr.length}});
    } 
    return (
        <div className='container'>
            <div className='row my-3 pt-3 table-info'>
                <div className='col-md-12 col-xl-11 mx-auto d-flex justify-content-between align-items-start py-3 mb-3 text-center border-bottom'>
                    <p>&nbsp;</p>
                    <p className='mb-0 w-25 text-start'>&nbsp;</p>
                    {/* Points heading */}
                    <div style={{ width: '100px', fontSize: '16px', lineHeight: '1.2' }} className="fw-bold"><small data-testid="strongly-disagree" >Strongly disagree</small></div>
                    <div style={{ width: '100px', fontSize: '16px', lineHeight: '1.2' }} className="fw-bold"><small data-testid="disagree">Disagree</small></div>
                    <div style={{ width: '100px', fontSize: '16px', lineHeight: '1.2' }} className="fw-bold"><small data-testid="neither-disagree">Neither agree not disagree</small></div>
                    <div style={{ width: '100px', fontSize: '16px', lineHeight: '1.2' }} className="fw-bold"><small data-testid="agree">Agree</small></div>
                    <div style={{ width: '100px', fontSize: '16px', lineHeight: '1.2' }} className="fw-bold"><small data-testid="strongly-agree">Strongly Agree</small></div>
                </div>
                {
                    sampledata && sampledata.map((data, mainindex) => {
                        return (
                            <div key={mainindex} className='col-md-12 col-xl-11 mx-auto d-flex justify-content-between align-items-center py-2 px-0 text-center border-bottom'>
                                <p className="mb-0">{mainindex+1}.</p>
                                {/* Question */}
                                <p className='mb-0 w-25 text-start'>{data.question}</p>
                                {data.answers.map((ans, index) => {
                                    return (
                                        <div key={index} style={{ width: '100px' }}>
                                            {/* Radio button */}
                                            <input id={index} type="radio" disabled={arrIndex.includes(mainindex) ? true : false} name={data.question} onClick={() => handleChange(ans, mainindex)} />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
                <div className='col-md-12 col-xl-11 align-items-center py-2 text-end mt-4 mx-auto px-0'>
                    <Button color="primary" disabled={arrIndex.length !== sampledata.length ? true : false} onClick={handleSubmit}>Show Result</Button>
                </div>
            </div>
        </div>
    )
}
