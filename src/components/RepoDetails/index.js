import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import deepEqual from 'deep-equal';

import Navbar from '../Common/Navbar';
import SearchField from '../Common/SearchField';
import SelectField from '../Common/SelectField';
import RepositorySummary from '../Common/RepositorySummary';
import './repo-details.css';

const TABS = ['Overview', 'Repositories', 'Stars', 'Followers', 'Following'];

const TYPES = ['All', 'Public', 'Private', 'Forks'];

const LANGUAGES = ['All', 'Javascript', 'HTML'];

class RepoDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1,
            search: '',
            type: TYPES[0],
            language: LANGUAGES[0],
            data: [ ...props.data ],
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!deepEqual(nextProps.data, this.props.data)) {
            this.setState({ data: [ ...nextProps.data ] });
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
        const { data } = this.props;
        let temp = [ ...data ];
        if (search) {
            temp = temp.filter(t => t.name && t.name.toLowerCase().includes(search.toLowerCase()));
        }
        if (language !== LANGUAGES[0]) {
            temp = temp.filter(t => t.language && t.language.toLowerCase() === language.toLowerCase());
        }
        this.setState({ data: temp });
    };

    clearAll = () => {
        this.setState({
            search: '',
            data: this.props.data,
            language: LANGUAGES[0],
        });
    };

    render() {
        const { active, search, type, language, data } = this.state;
        console.log('asdfdsfsdf', type, language);
        return (
            <div>
                <Navbar
                    tabs={TABS}
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
            </div>
        );
    }

}

RepoDetails.propTypes = {
    data: PropTypes.array,
};

RepoDetails.propTypes = {
    data: [],
};

export default RepoDetails;
