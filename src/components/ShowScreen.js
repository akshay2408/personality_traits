import React, { useState, useEffect } from 'react'
import data from "../data/sampleData";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "../common/From";

// import Button from '@mui/material/Button';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ShowScreen = () => {
    const [modal, setModal] = useState(false)
    const [editdata, setEditData] = useState({})
    const [updatedata, setUpdateData] = useState([])
    const [itemIndex,setItemIndex] = useState()
    
    useEffect(() => {
        setUpdateData(data)
    }, []);
    const toggle =() =>{
        setModal(!modal)
    }
    const dataset = (item,index) => {
        console.log("item-->", item)
        
        setEditData(item)
        setItemIndex(index)
        toggle()
    }

    const handleDelete = (index) => {
        const remainData = updatedata.filter((item,ind)=> ind !== index )
        setUpdateData(remainData)
    }
    
    return (
        <>
            <div style={{ alignItems: 'center' }}>
                {
                    updatedata && updatedata.map((item, index) => {
                        return (
                            <div className='my-3 w-50 mx-auto card card-body shadow-sm'>
                                <Button color="primary" style={{ position: 'absolute', right: 60, top: 2 }} onClick={() => handleDelete(index)}>Delete</Button>
                                <Button color="primary" style={{ position: 'absolute', right: 0, top: 2 }} onClick={() => dataset(item,index)}>Edit</Button>
                                <p>Q{index + 1}. {item.question}</p>
                                <p>{item.answers[0].type}  {item.answers[0].point}</p>
                                <p>{item.answers[1].type}  {item.answers[1].point}</p>
                                <p>{item.answers[2].type}  {item.answers[2].point}</p>
                                <p>{item.answers[3].type}  {item.answers[3].point}</p>
                                <p>{item.answers[4].type}  {item.answers[4].point}</p>
                            </div>
                        )
                    })
                }

            </div>
            <div>
                <Modal
                    show={modal}
                    onHide={toggle}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form data={editdata} name="edit" itemIndex={itemIndex} toggle={toggle}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={toggle}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}
