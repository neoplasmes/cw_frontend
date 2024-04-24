import React from 'react';
import "./Photography.css";
import { useNavigate } from 'react-router-dom';

export const Photography = () => {
  const navigate = useNavigate();
  return (
    <div className='photography-wrapper margin-global'>
        <nav className='photography-chapters'>
            <div className='photography-chapters-back go-back' onClick={() => {
              navigate(-1);
            }}>go back</div>
            <div className='link'>1</div>
            <div className='link'>1</div>
            <div className='link'>1</div>
            <div className='link'>1</div>
            <div className='link'>1</div>
            <div className='link'>1</div>
        </nav>
    </div>
  )
}