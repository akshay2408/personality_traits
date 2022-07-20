import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import datas from "../data/sampleData";
import Alert from 'react-bootstrap/Alert';
const FormPage = ({ data, name, itemIndex, toggle, setUpdateData }) => {
    const [question, setQuestion] = useState("")
    const [strongdis, setStrongDis] = useState("")
    const [disagree, setDisagree] = useState("")
    const [neutral, setNeutral] = useState("")
    const [agree, setAgree] = useState("")
    const [strongAgr, setStrongAgr] = useState("")
    const [alertShow,setAlertShow] = useState(false)
    useEffect(() => {
        // Set data for edit
        if (name == "edit") {
            setQuestion(data.question);
            setStrongDis(data.answers[0].point)
            setDisagree(data.answers[1].point)
            setNeutral(data.answers[2].point)
            setAgree(data.answers[3].point)
            setStrongAgr(data.answers[4].point)
        }
    }, []);
    // Function for question value
    const quehandle = (e) => {
        setQuestion(e.target.value)
    }
    // Function for strongly disagree value
    const strdishandle = (e) => {
        if(e.target.value < 0 || e.target.value > 100){
            alert("Please enter value between 0 to 100")
            return
        }
        setStrongDis(e.target.value)
    }
    // Function for disagree value
    const dishandle = (e) => {
        if(e.target.value < 0 || e.target.value > 100){
            alert("Please enter value between 0 to 100")
            return
        }
        setDisagree(e.target.value)
    }
    // Function for neutral value
    const neutralhandle = (e) => {
        if(e.target.value < 0 || e.target.value > 100){
            alert("Please enter value between 0 to 100")
            return
        }
        setNeutral(e.target.value)
    }
    // Function for agree value
    const agreehandle = (e) => {
        if(e.target.value < 0 || e.target.value > 100){
            alert("Please enter value between 0 to 100")
            return
        }
        setAgree(e.target.value)
    }
    // Function for strongly agree value
    const stragreehandle = (e) => {
        if(e.target.value < 0 || e.target.value > 100){
            alert("Please enter value between 0 to 100")
            return
        }
        setStrongAgr(e.target.value)
    }
    // Function for submit data
    const handleSubmit = () => {
        if(question == "" || strongdis == "" || disagree == "" || neutral == "" || agree  == "" || strongAgr == ""){
            alert("Fields can not be empty");
            return
        }
        let data = {
            question: question,
            answers: [
                {
                    type: "Strongly disagree",
                    point: strongdis
                },
                {
                    type: "Disagree",
                    point: disagree
                },
                {
                    type: "Neither agree not disagree",
                    point: neutral
                },
                {
                    type: "Agree",
                    point: agree
                },
                {
                    type: "Strongly agree",
                    point: strongAgr
                },
            ]
        }
        datas.push(data)
        setAlertShow(true)
        setQuestion("")
        setStrongDis("")
        setDisagree("")
        setNeutral("")
        setAgree("")
        setStrongAgr("")
    }
    // Function for editing data
    const handleEdit = () => {
        if(question == "" || strongdis == "" || disagree == "" || neutral == "" || agree  == "" || strongAgr == ""){
            alert("Fields can not be empty");
            return
        }
        let data = {
            question: question,
            answers: [
                {
                    type: "Strongly disagree",
                    point: strongdis
                },
                {
                    type: "Disagree",
                    point: disagree
                },
                {
                    type: "Neither agree not disagree",
                    point: neutral
                },
                {
                    type: "Agree",
                    point: agree
                },
                {
                    type: "Strongly agree",
                    point: strongAgr
                },
            ]
        }
        datas.splice(itemIndex, 1, data)
        setUpdateData(datas)
        toggle()
    }
    return (
        <>
            <Alert show={alertShow} key='success' variant='success'>
                Submit successfully
            </Alert>
            <Form>
                <Form.Group className="mb-3" controlId="Question">
                    <Form.Label>Question<span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control value={question} name="Question" onChange={(e) => quehandle(e)} type="text" placeholder="Write your Question" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="StronglyDisagreePoints">
                            <Form.Label>Strongly disagree<span style={{color:'red'}}>*</span></Form.Label>
                            <Form.Control name="StronglyDisagreePoints" value={strongdis} onChange={strdishandle} type="number" min="0" max="100" placeholder="Strongly disagree points" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="DisagreePoints">
                            <Form.Label>Disagree<span style={{color:'red'}}>*</span></Form.Label>
                            <Form.Control name="DisagreePoints" value={disagree} onChange={dishandle} type="number" min="0" max="100" placeholder="Disagree points" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="NeitherAgreeNotDisagreePoints">
                            <Form.Label>Neither agree not disagree<span style={{color:'red'}}>*</span></Form.Label>
                            <Form.Control name="NeitherAgreeNotDisagreePoints" value={neutral} onChange={neutralhandle} type="number" min="0" max="100" placeholder="Neither agree not disagree points" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="AgreePoints">
                            <Form.Label>Agree<span style={{color:'red'}}>*</span></Form.Label>
                            <Form.Control name="AgreePoints" value={agree} onChange={agreehandle} type="number" min="0" max="100" placeholder="Agree points" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="StronglyAgreePoints">
                    <Form.Label>Strongly Agree<span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control name="StronglyAgreePoints" value={strongAgr} onChange={stragreehandle} type="number" min="0" max="100" placeholder="Strongly Agree points" />
                </Form.Group>
                <Button color="primary" onClick={name == "edit" ? handleEdit : handleSubmit}>{name == "edit" ? "Update" : "Submit"}</Button>
            </Form>
        </>
    )
}

export default FormPage;