import React from 'react';
import PropTypes from 'prop-types';
import './search.css'

class SearchField extends React.Component {
    render() {
        const {
            placeholder, onChange, onKeyPress, value, name,
        } = this.props;
        return (
            <div>
                <input
                    className="search-input"
                    onChange={(e) => onChange(name, e)}
                    onKeyPress={onKeyPress}
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    name={name}
                />
            </div>
        );
    }
}

SearchField.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func,
};

SearchField.defaultProps = {
    placeholder: 'Search Repositories...',
    onKeyPress: () => {},
};

export default SearchField;