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
            <div className='row my-3'>
                <div className='col-md-12 col-xl-10 mx-auto d-flex justify-content-between align-items-center py-2 text-center'>
                    <p>&nbsp;</p>
                    <div className='w-25'></div>
                    {/* Points heading */}
                    <div style={{ width: '80px', fontSize: '12px' }}><small data-testid="strongly-disagree" >Strongly disagree</small></div>
                    <div style={{ width: '80px', fontSize: '12px' }}><small data-testid="disagree">Disagree</small></div>
                    <div style={{ width: '80px', fontSize: '12px' }}><small data-testid="neither-disagree">Neither agree not disagree</small></div>
                    <div style={{ width: '80px', fontSize: '12px' }}><small data-testid="agree">Agree</small></div>
                    <div style={{ width: '80px', fontSize: '12px' }}><small data-testid="strongly-agree">Strongly Agree</small></div>
                </div>
                {
                    sampledata && sampledata.map((data, mainindex) => {
                        return (
                            <div key={mainindex} className='col-md-12 col-xl-10 mx-auto d-flex justify-content-between align-items-center py-2 text-center'>
                                <p>{mainindex+1}.</p>
                                {/* Question */}
                                <p className='mb-0 w-25 text-end'>{data.question}</p>
                                {data.answers.map((ans, index) => {
                                    return (
                                        <div key={index} style={{ width: '80px' }}>
                                            {/* Radio button */}
                                            <input id={index} type="radio" disabled={arrIndex.includes(mainindex) ? true : false} name={data.question} onClick={() => handleChange(ans, mainindex)} />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
                <div className='align-items-center py-2 text-center mt-4'>
                    <Button color="primary" disabled={arrIndex.length !== sampledata.length ? true : false} onClick={handleSubmit}>Show Result</Button>
                </div>
            </div>
        </div>
    )
}
