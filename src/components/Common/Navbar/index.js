import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './navbar.css'

class Navbar extends React.Component {
    render() {
        const { tabs, active, handleChange } = this.props;
        return (
            <div>
                <div className={classNames("parent-nav", "border-bottom-gray")}>
                    {
                        tabs.map((tab, index) => (
                            <div
                                onClick={() => handleChange(index)}
                                className={classNames('nav-tab', active === index && 'active-tab')}
                            >
                                {tab}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

}

Navbar.propTypes = {
    tabs: PropTypes.array.isRequired,
    active: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Navbar;