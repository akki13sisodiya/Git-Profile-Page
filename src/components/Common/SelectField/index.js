import React from 'react';
import PropTypes from 'prop-types';

import './selectField.css';

class SelectField extends React.Component {
    render() {
        const { options, handleChange, name, value } = this.props;
        return (
            <div>
                <select
                    className="select-field"
                    name={name}
                    onChange={(e) => handleChange(name, e)}
                >
                    {
                        options.map(opt => (
                            <option key={opt} value={opt} selected={opt === value}>
                                {opt}
                            </option>
                        ))
                    }
                </select>
            </div>
        );
    }

}

SelectField.propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

SelectField.defaultProps = {
    options: [],
    handleChange: () => {},
};

export default SelectField;
