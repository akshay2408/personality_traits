import React, { useState } from 'react'
import sampledata from '../data/sampleData';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
export default function HomeScreen() {
    const [arrIndex, setArrIndex] = useState([]);
    const [optionArr, setOptionArr] = useState([])
    let navigate = useNavigate();
    const handleChange = (ans, index) => {
        setArrIndex([...arrIndex, index]);
        setOptionArr([...optionArr, ans]);
        

    }
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
                    <div className='w-50'></div>
                    <div style={{ width: '60px', fontSize: '12px' }}><small data-testid="strongly-disagree" >Strongly disagree</small></div>
                    <div style={{ width: '60px', fontSize: '12px' }}><small data-testid="disagree">Disagree</small></div>
                    <div style={{ width: '60px', fontSize: '12px' }}><small data-testid="neither-disagree">Neither agree not disagree</small></div>
                    <div style={{ width: '60px', fontSize: '12px' }}><small data-testid="agree">Agree</small></div>
                    <div style={{ width: '60px', fontSize: '12px' }}><small data-testid="strongly-agree">Strongly Agree</small></div>
                </div>
                {
                    sampledata && sampledata.map((data, mainindex) => {
                        return (
                            <div key={mainindex} className='col-md-12 col-xl-10 mx-auto d-flex justify-content-between align-items-center py-2 text-center'>
                                <p className='mb-0 w-50 text-end'>{data.question}</p>
                                {data.answers.map((ans, index) => {
                                    return (
                                        <div key={index} style={{ width: '60px' }}>
                                            <input id={index} type="radio" disabled={arrIndex.includes(mainindex) ? true : false} name={data.question} onClick={() => handleChange(ans, mainindex)} />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
                <div className='align-items-center py-2 text-center mt-4'>
                    <Button color="primary" onClick={handleSubmit}>Show Result</Button>
                </div>
            </div>
        </div>
    )
}
