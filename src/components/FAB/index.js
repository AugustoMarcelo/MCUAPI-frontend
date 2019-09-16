import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import { Button } from './styles';

export default function FAB({ onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      <FaPlus size={20} />
    </Button>
  );
}

FAB.propTypes = {
  onClick: PropTypes.func.isRequired,
};
