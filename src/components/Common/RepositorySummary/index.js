import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './repository.css';
import Circle from '../Circle';
import { getDateInMonthDDYYYYFormat } from '../../../constants/helper';

export const getBackground = lang => {
    switch (lang.toLowerCase()) {
        case 'javascript': return '#f1e05a';
        case 'css': return '#563d7c';
        case 'java': return '#e34c26';
        case 'html': return '#e34c26';
        default:
            return '#e34c26';
    }
};

class RepositorySummary extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className={classNames('ptb-20', 'border-bottom-gray')}>
                <div className={classNames('repository-title', 'mb-4')}>{data.name}</div>
                <div className={classNames('repository-desc', 'mb-8', 'fs-14')}>{data.description}</div>
                <div className={classNames('repository-attr', 'mt-16', 'fs-14', 'grey-text')}>
                    {
                        data.language &&
                        <React.Fragment>
                            <Circle
                                height={12}
                                width={12}
                                background={getBackground(data.language)}
                            />
                            <span className={classNames('ml-5', 'mr-16')}>{data.language}</span>
                        </React.Fragment>
                    }
                    {
                        data.pushed_at &&
                            <React.Fragment>
                                <span>Updated On </span>
                                <span>{getDateInMonthDDYYYYFormat(new Date(data.pushed_at))}</span>
                            </React.Fragment>
                    }
                </div>
            </div>
        );
    }
}

RepositorySummary.propTypes = {
    data: PropTypes.object,
};

RepositorySummary.defaultProps = {
    data: {},
};

export default RepositorySummary;
