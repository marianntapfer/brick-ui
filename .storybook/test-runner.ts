import type { TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { getStoryContext } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const { parameters } = await getStoryContext(page, context);

    /**Visual snapshot tests */
    let image: any;

    // const viewport = parameters.viewport.defaultViewport;
    // if (viewport !== undefined) {
    //   const viewportSize = parameters.viewport.viewports[viewport].styles;
    //   const width = parseInt(viewportSize.width);
    //   const height =
    //     viewportSize.height === '100%' ? 800 : parseInt(viewportSize.height);

    //   await page.setViewportSize({ width, height });
    //   image = await page.screenshot({ fullPage: true });
    // } else {
    //   /** When no defaultViewport has specified take a screenshot of the body element */
    //   image = await page.locator('body').screenshot();
    // }
    image = await page.locator('body').screenshot();

    expect(image).toMatchImageSnapshot({
      failureThreshold: 500,
      failureThresholdType: 'pixel',
      diffDirection: 'vertical',
      customSnapshotIdentifier: context.id,
      dumpInlineDiffToConsole: true,
      allowSizeMismatch: true,
    });

    /** Accessibility test */
    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: parameters?.a11y?.config?.rules,
    });

    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  },
};

module.exports = config;
