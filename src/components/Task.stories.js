import React from "react";
// 'action' -  allows us to create a callback that appears in the actions panel of the Storybook UI when clicked
// help you verify interactions when building UI components in isolation.
import { action } from "@storybook/addon-actions";

import Task from './Task'

//To tell Storybook about the component we are documenting
export default {
    component: Task,
    title: 'Task',
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

//Story 1
export const Default = () => <Task task={{ ...taskData }} {...actionsData} />
//Story 2
export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
//Story 3
export const Archived = () => <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />