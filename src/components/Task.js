import React from "react";
// It’s best practice to use propTypes in React to specify the shape of data that a component expects
import PropTypes from 'prop-types';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        <div className={`list-item ${state}`}>
            <label className='checkbox'>
                <input
                    type='checkbox'
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name='checked'
                />
                <span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
            </label>
            <div className='title'>
                <input
                    type='text'
                    value={title}
                    readOnly={true}
                    placeholder='Input title'
                    style={{textOverflow: 'ellipsis'}}
                />
            </div>
            <div className='actions' onClick={event => event.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' && (
                    <a href="/#" onClick={() => onPinTask(id)}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
        </div >
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func
}