import React from 'react';
import PropTypes from 'prop-types';

class Circle extends React.Component {
    render() {
        const { height, width, background } = this.props;
        const style={
            height,
            width,
            backgroundColor: background,
            borderRadius: '50%',
            display: 'inline-block',
            top: '2px',
        };
        return (
            <span style={style} />
        );
    }

}

Circle.PropTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    background: PropTypes.string,
};

export default Circle;
