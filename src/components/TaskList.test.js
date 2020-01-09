// we can simply import the story in our tests, and render it here

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { WithPinnedTasks } from "./TaskList.stories";

// Unit tests with Jest verify that the output of a component remains the same given an fixed input. 
// They’re great for testing the functional qualities of a component.
//unit testing that the element correctly renders pinned tasks 1st 
it('renders pinned tasks at the task of the list', () => {
    const div = document.createElement('div')
    ReactDOM.render(<WithPinnedTasks />, div)

    // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
    const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')
    expect(lastTaskInput).not.toBe(null)

    ReactDOM.unmountComponentAtNode(div)
})


// Visual tests rely on developers to manually look at a component to verify it for correctness. 
// They help us sanity check a component’s appearance as we build.
// Snapshot tests with Storyshots capture a component’s rendered markup.
// They help us stay abreast of markup changes that cause rendering errors and warnings.