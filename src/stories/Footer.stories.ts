import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/ui/Footer.tsx';

const meta: Meta = {
    title: 'Layout/Footer',
    component: Footer,
    tags: ['autodocs'],
    parameters: {
        layout: 'center',
    }
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFooter: Story = {}