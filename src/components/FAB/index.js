import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import { Button } from './styles';

export default function FAB({ onClick, sidebarOpen }) {
  return (
    <Button type="button" sidebarOpen={sidebarOpen} onClick={onClick}>
      <FaPlus size={20} />
    </Button>
  );
}

FAB.propTypes = {
  onClick: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool,
};

FAB.defaultProps = {
  sidebarOpen: false,
};
