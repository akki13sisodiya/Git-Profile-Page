import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './profile.css';
import { fetchProfile } from '../../redux/profile/profile-actions';
import { USERNAME } from '../../constants/constants';
import ProfilePane from '../../components/ProfilePane';
import RepoDetails from '../../components/RepoDetails';
import { fetchRepositories } from '../../redux/respository/repository-actions';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchProfile(USERNAME));
        // dispatch(fetchRepositories(USERNAME));
    }

    render() {
        const { profile, repository } = this.props;
        return (
            <div>
                <div className="main-container">
                    <div className="left-profile-pane">
                        <ProfilePane data={profile.data} />
                    </div>
                    <div className="description">
                        <RepoDetails data={repository.data} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile,
    repository: state.repository,
});


ProfileContainer.propTypes = {
    profile: PropTypes.object.isRequired,
    repository: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ProfileContainer);

