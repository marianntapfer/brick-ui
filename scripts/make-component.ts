import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import path from 'node:path';

const name = process.argv[2];

const componentName = name.charAt(0).toUpperCase() + name.slice(1);

const folderPath = path.join(
  __dirname,
  '..',
  'src',
  'components',
  componentName
);

// make dir /Component
try {
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath);
  }
} catch (error) {
  console.error(error);
}

// make button.css.ts
const cssFileName = path.join(folderPath, `${name}.css.ts`);
const cssFileContent = `import { style } from '@vanilla-extract/css';

export const main = style({
  color: 'green',
});`;

try {
  writeFileSync(cssFileName, cssFileContent);
} catch (error) {
  console.error(error);
}

// make Component.tsx
const mainFileName = path.join(folderPath, `${componentName}.tsx`);
const mainContent = `import React from 'react';
import * as styles from './${name}.css';

export interface ${componentName}Props {
  className?: string;
  children: React.ReactNode;
}

export const ${componentName} = ({ className, children }: ${componentName}Props) => {
  const classes: string[] = [styles.main];
  className && classes.push(className);

  return <div className={classes.join(' ')}>{children}</div>;
};
`;

try {
  writeFileSync(mainFileName, mainContent);
} catch (error) {
  console.error(error);
}

// make Component.stories.tsx
const storiesFileName = path.join(folderPath, `${componentName}.stories.tsx`);
const storiesFileContent = `import { Meta, StoryObj } from '@storybook/react';

import { ${componentName} } from './${componentName}';

import React from 'react';

const meta = {
  component: ${componentName},
  tags: ['autodocs'],
  args: { children: 'Hello' },
} satisfies Meta<typeof ${componentName}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
`;
try {
  writeFileSync(storiesFileName, storiesFileContent);
} catch (error) {
  console.error(error);
}

// make index.ts
const indexFileName = path.join(folderPath, 'index.ts');
const indexFileContent = `export * from './${componentName}';`;

try {
  writeFileSync(indexFileName, indexFileContent);
} catch (error) {
  console.error(error);
}

// add component to index.ts in /components
const barrelFilePath = path.join(__dirname, '..', 'src', 'index.ts');

try {
  const data = readFileSync(barrelFilePath, 'utf8');
  console.log(data);
  const barrelFileContent = `${data}export * from './components/${componentName}';\n`;

  writeFileSync(barrelFilePath, barrelFileContent);
} catch (err) {
  console.error(err);
}
