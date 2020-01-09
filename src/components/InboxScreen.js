import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import TaskList from "./TaskList";

//never render container components anywhere in your app except at the highest level and instead pass all data-requirements down the component hierarchy

export function PureIndoxScreen({ error }) {
    if (error) {
        return (
            <div className="page lists-show">
                <span className="icon-face-sad" />
                <div className="title-message">Oh no!</div>
                <div className="subtitle-message">Something went wrong</div>
            </div>
        )
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <TaskList />
        </div>
    )
}

PureInboxScreen.propTypes = {
    error: PropTypes.string
}

PureInboxScreen.defaultProps = {
    error: null
}

export default connect(({ error }) => ({ error }))(PureInboxScreen)