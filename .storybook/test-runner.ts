// import type { TestRunnerConfig } from '@storybook/test-runner';
// import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';
// import { toMatchImageSnapshot } from 'jest-image-snapshot';
// import { getStoryContext } from '@storybook/test-runner';

// // https://github.com/storybookjs/test-runner#getting-started

// const config: TestRunnerConfig = {
//   // setup() {
//   //   expect.extend({ toMatchImageSnapshot });
//   // },
//   async preVisit(page) {
//     await injectAxe(page);
//   },
//   async postVisit(page, context) {
//     // Get the entire context of a story, including parameters, args, argTypes, etc.
//     const { parameters } = await getStoryContext(page, context);

//     /**Visual snapshot tests */
//     let image: any;

//     // const viewport = parameters.viewport.defaultViewport;
//     // if (viewport !== undefined) {
//     //   const viewportSize = parameters.viewport.viewports[viewport].styles;
//     //   const width = parseInt(viewportSize.width);
//     //   const height =
//     //     viewportSize.height === '100%' ? 800 : parseInt(viewportSize.height);

//     //   await page.setViewportSize({ width, height });
//     //   image = await page.screenshot({ fullPage: true });
//     // } else {
//     //   /** When no defaultViewport has specified take a screenshot of the body element */
//     //   image = await page.locator('body').screenshot();
//     // }
//     // image = await page.locator('body').screenshot();

//     // expect(image).toMatchImageSnapshot({
//     //   failureThreshold: 500,
//     //   failureThresholdType: 'pixel',
//     //   diffDirection: 'vertical',
//     //   customSnapshotIdentifier: context.id,
//     //   dumpInlineDiffToConsole: true,
//     //   allowSizeMismatch: true,
//     //   customDiffDir: './diff'
//     // });

//     /** Accessibility test */
//     // Apply story-level a11y rules
//     await configureAxe(page, {
//       rules: parameters?.a11y?.config?.rules,
//     });

//     await checkA11y(page, '#storybook-root', {
//       // detailedReport: true,
//       // detailedReportOptions: { html: true },
//       verbose: false,
//     });
//   },
// };

// module.exports = config;
