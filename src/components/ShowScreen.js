import React, { useState, useEffect } from 'react'
import data from "../data/sampleData";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "../common/From";

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
                            <div className='my-3 w-50 mx-auto card card-body shadow-sm' key={index} style={{ backgroundColor: '#f7f7f7' }}>                                
                                <p className="mb-1">Q{index + 1}. {item.question}</p>
                                <p className="mb-1">{item.answers[0].type}  {item.answers[0].point}</p>
                                <p className="mb-1">{item.answers[1].type}  {item.answers[1].point}</p>
                                <p className="mb-1">{item.answers[2].type}  {item.answers[2].point}</p>
                                <p className="mb-1">{item.answers[3].type}  {item.answers[3].point}</p>
                                <p className="mb-1">{item.answers[4].type}  {item.answers[4].point}</p>
                                <div className="mt-4 text-right">
                                    <Button color="primary" data-testid="delete" className="me-2" onClick={() => handleDelete(index)}>Delete</Button>
                                    <Button color="primary" data-testid="edit"  onClick={() => dataset(item,index)}>Edit</Button>
                                </div>
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
                        <Modal.Title data-testid="modal-title">Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form data={editdata} name="edit" itemIndex={itemIndex} toggle={toggle}/>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}
