import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ResultPage() {
  const params = useParams();
  const navigate = useNavigate();

  
  return (
    <div className="page">
      <div className="welcome-card">
        <h1 className='title'>Congrats {params.username}</h1>
        <h2 className='subtitle'>Score: {params.score}</h2>
        <button className="primary-btn" onClick={() => navigate(`/`, { replace: true })}>
          Return To Home Page
        </button>
      </div>
    </div>
  )
}

export default ResultPage