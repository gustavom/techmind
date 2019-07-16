import React from 'react';
import PropTypes from 'prop-types';
import './techitem.css';
function TechItem({tech, onDelete}){
  return (
    <li>
      {tech}
      <button className="btn-close" onClick={onDelete} type="button">Remover</button>
    </li>
  )
}

TechItem.defaultProps ={
  tech: 'Oculto',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;