import React from 'react';
import { Container } from '@mui/material';
import FormPage from '../common/From';

export const CreateScreen = () => {
    return (
        <>
            <Container>
                <div className='my-3 w-50 mx-auto card card-body shadow-m'>
                    <FormPage />
                </div>
            </Container>
        </>
    )
}
