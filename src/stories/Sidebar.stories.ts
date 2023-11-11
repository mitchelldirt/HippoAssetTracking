import type { Meta, StoryObj } from '@storybook/react';

import SidebarStory from "@/stories/SidebarStory.tsx";

const meta: Meta = {
    title: 'Layout/Sidebar',
    component: SidebarStory,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof SidebarStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSidebar: Story = {};
