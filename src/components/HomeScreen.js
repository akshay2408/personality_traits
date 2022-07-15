import React, { useState } from 'react'
import sampledata from '../data/sampleData';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
export default function HomeScreen() {
    const [arrIndex, setArrIndex] = useState([]);
    const [optionArr, setOptionArr] = useState([])
    const [result,setResult] = useState()
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
        // console.log("handle change here ", ans, index)
    } 
    return (
        <div className='container'>
            <div className='row my-3'>
                <div className='col-md-12 col-xl-10 mx-auto d-flex justify-content-between align-items-center py-2 text-center'>
                    <div className='w-50'></div>
                    <div style={{ width: '60px', fontSize: '12px' }}><small>Strongly disagree</small></div>
                    <div style={{ width: '60px', fontSize: '12px' }}><small>Disagree</small></div>
                    <div style={{ width: '60px', fontSize: '12px' }}><small>Neither agree not disagree</small></div>
                    <div style={{ width: '60px', fontSize: '12px' }}><small>Agree</small></div>
                    <div style={{ width: '60px', fontSize: '12px' }}><small>Strongly Agree</small></div>
                </div>
                {
                    sampledata && sampledata.map((data, mainindex) => {
                        return (
                            <div key={mainindex} className='col-md-12 col-xl-10 mx-auto d-flex justify-content-between align-items-center py-2 text-center'>
                                <p className='mb-0 w-50 text-end'>{data.question}</p>
                                {/* <RadioGroup
                            value="a"
                            onChange={handleChange}
                            name="controlled-radio-buttons-group"
                            > */}
                                {data.answers.map((ans, index) => {
                                    return (
                                        <div key={index} style={{ width: '60px' }}>
                                            {/* <FormControlLabel value={ans} control={<Radio />} /> */}
                                            <input id={index} type="radio" disabled={arrIndex.includes(mainindex) ? true : false} name={data.question} onClick={() => handleChange(ans, mainindex)} />

                                            {/* <Radio
                                                // checked={"a" === 'a'}
                                                
                                                value="a"
                                                name={data.question}
                                                inputProps={{ 'aria-label': 'A' }}
                                            /> */}
                                            {/* <FormControl>
                                            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={""}
                                                onChange={handleChange}
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            </RadioGroup>
                                        </FormControl><div style={{ marginLeft: '10px' }}>{ans.type}</div> */}
                                        </div>
                                    )
                                })}
                                {/* </RadioGroup> */}
                            </div>
                        )
                        console.log("data", data)
                    })
                }
                <div className='align-items-center py-2 text-center mt-4'>
                    <Button color="primary" onClick={handleSubmit}>Show Result</Button>
                </div>
            </div>
        </div>
    )
}
