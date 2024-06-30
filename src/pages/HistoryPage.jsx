import React from 'react'
import { formatDate, useLocalStorage } from '../hooks/CustomHooks';

function HistoryPage() {
  const [history, setHistory] = useLocalStorage('history');

  return (
    <div className="page">
      <div className="history">
        <div className='history-item'>
          <p>Username</p>
          <p>Score</p>
          <p className='date'>Date</p>
        </div>
        {history?.map((item, i) => {
          return <div key={i} className='history-item'>
            <p>{item.username}</p>
            <p>{item.score}</p>
            <p className='date'>{formatDate(item.date)}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default HistoryPage