import { Meta } from '@storybook/react';
import { arrow, underlined } from './random.css';

const meta: Meta = {
  title: 'Random examples',
  args: { children: 'my link text' },
};

export default meta;

export const TextUnderline = {
  render: ({ children }: any) => {
    return (
      <a href='google.com' className={underlined}>
        {children}
        <span className={arrow}> &#8599;</span>
      </a>
    );
  },
};
