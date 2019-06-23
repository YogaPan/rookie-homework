import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Display = ({next, total}) => {
  return (
    <div className="display">
      <p className="result">{next || total || '0'}</p>
    </div>
  );
};


Display.propTypes = {
  next: PropTypes.object.isRequired,
  total: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  next: state.next,
  total: state.total,
});

export default connect(mapStateToProps)(Display);
