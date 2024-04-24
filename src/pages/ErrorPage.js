import React from 'react'
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className='margin-global'>
            <h1>Error</h1>
            <div className='go-back' onClick={() => {
                navigate(-1);
            }}>go back</div>
        </div>
    )
}
