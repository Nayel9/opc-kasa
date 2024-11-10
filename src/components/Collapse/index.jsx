import propTypes from 'prop-types';
import '../../utils/style/collapse.scss';
import { FaAngleUp } from 'react-icons/fa6';
import { useState, useRef } from 'react';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
    parentRef.current.classList.toggle('open', !isOpen);
    parentRef.current.classList.toggle('close', isOpen);
  };

  return (
    <div className="CollapseWrapper">
      <div className="CollapseHeader" onClick={handleClick}>
        <h3>{title}</h3>
        <FaAngleUp className={`CollapseIcon ${isOpen ? 'rotate' : ''}`} />
      </div>
        <div className="Content" ref={parentRef}>{children}</div>
    </div>
  );
}

Collapse.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Collapse;
