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
    }, []);

    const quehandle = (e) => {
        setQuestion(e.target.value)
    }
    const strdishandle = (e) => {
        setStrongDis(e.target.value)
    }
    const dishandle = (e) => {
        setDisagree(e.target.value)
    }
    const neutralhandle = (e) => {
        setNeutral(e.target.value)
    }
    const agreehandle = (e) => {
        setAgree(e.target.value)
    }

    const stragreehandle = (e) => {
        setStrongAgr(e.target.value)
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
                <Form.Group className="mb-3" controlId="Question">
                    <Form.Label>Question</Form.Label>
                    <Form.Control value={question} name="Question" onChange={(e) => quehandle(e)} type="text" placeholder="Write your Question" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="StronglyDisagreePoints">
                            <Form.Label>Strongly disagree</Form.Label>
                            <Form.Control name="StronglyDisagreePoints" value={strongdis} onChange={strdishandle} type="number" min="0" max="100" placeholder="Strongly disagree points" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="DisagreePoints">
                            <Form.Label>Disagree</Form.Label>
                            <Form.Control name="DisagreePoints" value={disagree} onChange={dishandle} type="number" min="0" max="100" placeholder="Disagree points" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="NeitherAgreeNotDisagreePoints">
                            <Form.Label>Neither agree not disagree</Form.Label>
                            <Form.Control name="NeitherAgreeNotDisagreePoints" value={neutral} onChange={neutralhandle} type="number" min="0" max="100" placeholder="Neither agree not disagree points" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="AgreePoints">
                            <Form.Label>Agree</Form.Label>
                            <Form.Control name="AgreePoints" value={agree} onChange={agreehandle} type="number" min="0" max="100" placeholder="Agree points" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="StronglyAgreePoints">
                    <Form.Label>Strongly Agree</Form.Label>
                    <Form.Control name="StronglyAgreePoints" value={strongAgr} onChange={stragreehandle} type="number" min="0" max="100" placeholder="Strongly Agree points" />
                </Form.Group>
                <Button color="primary" onClick={name == "edit" ? handleEdit : handleSubmit}>{name == "edit" ? "Edit" : "Submit"}</Button>
            </Form>
        </>
    )
}

export default FormPage;