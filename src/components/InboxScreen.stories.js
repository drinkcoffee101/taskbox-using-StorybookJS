import React from 'react'
import { action } from '@storybook/addon-actions'
import { Provider } from "react-redux";

import { PureInboxScreen } from "./InboxScreen";
import { defaultTasksData } from "./TaskList.stories";

//Using a mocked version of the Redux store provided in a decorator

export default {
    component: PureInboxScreen,
    title: 'InboxScreen',
    decorators: [story => <Provider store={store}>{story()}</Provider>]
}

// A super-simple mock of a redux store
const store = {
    getState: () => {
        return {
            tasks: defaultTasksData
        }
    },
    subscribe: () => 0,
    dispatch: action('dispatch')
}

export const Default = () => <PureInboxScreen />

export const Error = () => <PureInboxScreen error="Something" />