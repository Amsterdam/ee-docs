import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

const wcagTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] as const;

async function expectNoA11yViolations(page: Page) {
  const accessibilityScanResults = await new AxeBuilder({ page }).withTags([...wcagTags]).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
}

const pages = [
  {
    name: 'homepage',
    path: '/',
    readySelector: 'main',
  },
  {
    name: 'documentation intro page',
    path: '/docs/intro',
    readySelector: 'article',
  },
];

for (const pageUnderTest of pages) {
  test(`meets WCAG 2.1 AA requirements on the ${pageUnderTest.name}`, async ({ page }) => {
    await page.goto(pageUnderTest.path);
    await expect(page.locator(pageUnderTest.readySelector)).toBeVisible();

    await expectNoA11yViolations(page);
  });
}

test('navigates from homepage card to Languages & Frameworks and meets WCAG 2.1 AA', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('main')).toBeVisible();

  const firstCard = page.locator('.ams-card').first();
  await expect(firstCard).toContainText('Languages & Frameworks');

  await firstCard.getByRole('link', { name: 'Languages & Frameworks', exact: true }).click();
  await expect(page).toHaveURL(/\/docs\/general\/languages-and-frameworks$/);
  await expect(page.locator('article')).toBeVisible();

  await expectNoA11yViolations(page);
});

test('navigates via expandable docs sidebar and meets WCAG 2.1 AA', async ({ page }) => {
  await page.goto('/docs/intro');
  await expect(page.locator('article')).toBeVisible();

  const commonStandardsToggle = page.getByRole('button', { name: /Common standards/i }).first();
  if (await commonStandardsToggle.isVisible()) {
    const isExpanded = await commonStandardsToggle.getAttribute('aria-expanded');
    if (isExpanded === 'false') {
      await commonStandardsToggle.click();
    }
  }

  const sidebar = page.locator('aside');
  await sidebar.locator('a[href="/docs/general/languages-and-frameworks"]').click();
  await expect(page).toHaveURL(/\/docs\/general\/languages-and-frameworks$/);
  await expect(page.locator('article')).toBeVisible();

  await expectNoA11yViolations(page);
});
