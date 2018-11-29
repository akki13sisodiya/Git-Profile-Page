import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import deepEqual from 'deep-equal';

import Navbar from '../Common/Navbar';
import SearchField from '../Common/SearchField';
import SelectField from '../Common/SelectField';
import RepositorySummary from '../Common/RepositorySummary';
import './repo-details.css';

// We can declare TABS, TYPES and LANGUAGES in AppConfig.\
const TABS = [
    {
        name: 'Overview',
        no: '',
    },
    {
        name: 'Repositories',
        no: 'public_repos',
    },
    {
        name: 'Stars',
        no: '',
    },
    {
        name: 'Followers',
        no: 'followers',
    },
    {
        name: 'Following',
        no: 'following',
    },
];

const TYPES = ['All', 'Public', 'Private', 'Forks'];

const LANGUAGES = ['All', 'Javascript', 'HTML'];

class RepoDetails extends React.Component {
    constructor(props) {
        super(props);
        const repository = { ...props.repository };
        this.state = {
            active: 1,
            search: '',
            type: TYPES[0],
            language: LANGUAGES[0],
            data: repository ? [ ...repository.data ] : [],
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!deepEqual(nextProps.repository, this.props.repository)) {
            const repository = { ...nextProps.repository };
            this.setState({ data: [ ...repository.data ] });
        }
    }

    handleTabChange = (index) => {
        this.setState({ active: index });
    };

    handleChange = (name, event) => {
        this.setState({ [name]: event.target.value }, () => this.filterData());
    };

    handleSearchKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.filterData();
        }
    };

    filterData = () => {
        const { search, language } = this.state;
        const { repository } = this.props;
        let temp = [ ...repository.data ];
        if (search) {
            temp = temp.filter(t => t.name && t.name.toLowerCase().includes(search.toLowerCase()));
        }
        if (language !== LANGUAGES[0]) {
            temp = temp.filter(t => t.language && t.language.toLowerCase() === language.toLowerCase());
        }
        this.setState({ data: temp });
    };

    clearAll = () => {
        const { repository } = this.props;
        this.setState({
            search: '',
            data: repository.data,
            language: LANGUAGES[0],
        });
    };

    render() {
        const { active, search, type, language, data } = this.state;
        const { profile } = this.props;
        return (
            <React.Fragment>
                <Navbar
                    tabs={TABS}
                    data={profile ? profile.data : {}}
                    active={active}
                    handleChange={this.handleTabChange}
                />
                <div className={classNames('mtb-1','search-filter')}>
                    <div className="repo-search-root">
                        <SearchField
                            value={search}
                            name="search"
                            onChange={this.handleChange}
                            onKeyPress={this.handleSearchKeyPress}
                        />
                    </div>
                    <SelectField
                        options={TYPES}
                        name="type"
                        value={type}
                        handleChange={this.handleChange}
                    />
                    <SelectField
                        options={LANGUAGES}
                        name="language"
                        value={language}
                        handleChange={this.handleChange}
                    />
                    <button
                        className="new-button"
                        type="button"
                    >
                        New
                    </button>
                </div>
                <div className="border-bottom-gray" />
                <div>
                    {
                        ((data) && (search || language !== LANGUAGES[0])) &&
                            <div className={classNames('ptb-20', 'display-flex', 'justify-space-between')} >
                                <div>
                                    {data.length} result found
                                </div>
                                <div onClick={this.clearAll} className="pointer">
                                    Clear All
                                </div>
                            </div>
                    }
                </div>
                <div>
                    {
                        data.map(d => (
                            <RepositorySummary
                                key={`${d.id}-rs`}
                                data={d}
                            />
                        ))
                    }
                </div>
            </React.Fragment>
        );
    }

}

RepoDetails.propTypes = {
    repository: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

export default RepoDetails;
