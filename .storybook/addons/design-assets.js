import React, { Fragment } from 'react';
import { AddonPanel } from "@storybook/components";
import { addons, types } from "@storybook/addons";
import { useParameter } from "@storybook/api"

const Content = () => {
    // story's parameter being retrieved here
    const results = useParameter("assets", [])

    return (
        <Fragment>
            {results.length ? (
                <ol>
                    {results.map(i => (
                        <li>{i}</li>
                    ))}
                </ol>
            ) : null}
        </Fragment>
    )
}

addons.register("my/design-assets", () => {
    addons.add("design-assets/panel", {
        title: "assets",
        type: types.PANEL,
        render: ({ active, key }) => (
            <AddonPanel active={active} key={key}>
                <Content />
            </AddonPanel>
        )
    })
})