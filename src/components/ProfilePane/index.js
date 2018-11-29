import React from 'react';
import PropTypes from 'prop-types';
import './profile-pane.css';

class ProfilePane extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                <div>
                    <img
                        src={data.avatar_url}
                        alt={data.name}
                        className="avatar"
                    />
                </div>
                <div className="person-name">{data.name}</div>
                <div className="login-name">{data.login}</div>
                <div className="person-bio">{data.bio}</div>
                <button
                    className="profile-button"
                    type="button"
                >
                    Edit Bio
                </button>
                <div className="border-bottom-gray" style={{ margin: '1rem 0' }} />
                <div className="grey-text">{data.company}</div>
                <div className="grey-text">{data.location}</div>
            </React.Fragment>
        );
    }
}

ProfilePane.propTypes = {
    data: PropTypes.object,
};

ProfilePane.defaultProps = {
    data: {},
};

export default ProfilePane;