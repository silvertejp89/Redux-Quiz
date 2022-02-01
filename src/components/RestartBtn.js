import React from 'react'
import { useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const RestartBtn = () => {
  const dispatch = useDispatch()

  return (
    <button
      className='restart-btn'
      type='button'
      onClick={() => {
        dispatch(quiz.actions.restart())
      }}
    >
      <i className='fas fa-arrow-circle-left' />
      &nbsp;&nbsp;Back to start
    </button>

  )
}

