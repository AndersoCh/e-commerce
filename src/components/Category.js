import React from 'react'

const Category = ({id,titulo, onCategoriaClick}) => {
  return (
    <div key={id} onClick={() => onCategoriaClick(id) }>{titulo}</div>
  )
}

export default Category