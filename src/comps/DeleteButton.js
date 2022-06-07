import React from 'react'
import useFirestore from '../hooks/useFirestore'

const DeleteButton = () => {
  const { docs } = useFirestore('images')

  return (
    <div class="delete-button">
      <span class="close">&times;</span>
      <img src="http://lorempixel.com/100/80" alt="close" />
    </div>
  )
}

export default DeleteButton
