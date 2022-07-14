import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import datas from "../data/sampleData";
import Alert from 'react-bootstrap/Alert';
const FormPage = ({ data, name, itemIndex, toggle }) => {
    const [question, setQuestion] = useState("")
    const [strongdis, setStrongDis] = useState("")
    const [disagree, setDisagree] = useState("")
    const [neutral, setNeutral] = useState("")
    const [agree, setAgree] = useState("")
    const [strongAgr, setStrongAgr] = useState("")
    const [alertShow,setAlertShow] = useState(false)
    useEffect(() => {
        if (name == "edit") {
            setQuestion(data.question);
            setStrongDis(data.answers[0].point)
            setDisagree(data.answers[1].point)
            setNeutral(data.answers[2].point)
            setAgree(data.answers[3].point)
            setStrongAgr(data.answers[4].point)
        }
        console.log("editdata----->", data)
    }, []);

    const quehandle = (e) => {
        setQuestion(e.target.value)
    }
    const strdishandle = (e) => {
        setStrongDis(e.target.value)
        console.log("==")
    }
    const dishandle = (e) => {
        setDisagree(e.target.value)
        console.log("==")
    }
    const neutralhandle = (e) => {
        setNeutral(e.target.value)
        console.log("==")
    }
    const agreehandle = (e) => {
        setAgree(e.target.value)
        console.log("==")
    }

    const stragreehandle = (e) => {
        setStrongAgr(e.target.value)
        console.log("==")
    }

    const handleSubmit = () => {
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
        console.log(datas)
        setAlertShow(true)
        setQuestion("")
        setStrongDis("")
        setDisagree("")
        setNeutral("")
        setAgree("")
        setStrongAgr("")
    }
    const handleEdit = () => {
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
        toggle()
    }
    return (
        <>
            <Alert show={alertShow} key='success' variant='success'>
                Submit successfully
            </Alert>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Question</Form.Label>
                    <Form.Control value={question} onChange={(e) => quehandle(e)} type="text" placeholder="Write your Question" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Strongly disagree</Form.Label>
                            <Form.Control value={strongdis} onChange={strdishandle} type="text" placeholder="Strongly disagree points" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Disagree</Form.Label>
                            <Form.Control value={disagree} onChange={dishandle} type="text" placeholder="Disagree points" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Neither agree not disagree</Form.Label>
                            <Form.Control value={neutral} onChange={neutralhandle} type="text" placeholder="Neither agree not disagree points" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Agree</Form.Label>
                            <Form.Control value={agree} onChange={agreehandle} type="text" placeholder="Agree points" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Strongly Agree</Form.Label>
                    <Form.Control value={strongAgr} onChange={stragreehandle} type="text" placeholder="Strongly Agree points" />
                </Form.Group>
                <Button color="primary" onClick={name == "edit" ? handleEdit : handleSubmit}>{name == "edit" ? "Edit" : "Submit"}</Button>
            </Form>
        </>
    )
}

export default FormPage;