import React from "react";
// 'action' -  allows us to create a callback that appears in the actions panel of the Storybook UI when clicked
// help you verify interactions when building UI components in isolation.
import { action } from "@storybook/addon-actions";
// easy access to editing passed data to a component
import { withKnobs, object } from "@storybook/addon-knobs/react";

import Task from './Task'

//To tell Storybook about the component we are documenting
export default {
    component: Task,
    title: 'Task',
    decorators: [withKnobs],
    parameters: {
        assets: [
            "path/to/your/asset.png",
            "path/to/another/asset.png",
            "path/to/yet/another/asset.png"
        ]
    },
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/
}

export const taskData = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0)
}

export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask')
}

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

//Story 1
export const Default = () => <Task task={object('task', { ...taskData })} {...actionsData} />
//Story 2
export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
//Story 3
export const Archived = () => <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />

export const LongTitle = () => (
    <Task task={{ ...taskData, title: longTitleString }} {...actionsData} />
)