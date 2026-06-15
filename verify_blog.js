const { chromium } = require('./node_modules/@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  // 1. Blog list page
  await page.goto('http://localhost:5174/blog', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'tmp_blog_list.png', fullPage: false });

  const navLinks = await page.locator('.header__nav a').allTextContents();
  console.log('NAV LINKS:', JSON.stringify(navLinks));

  const heroText = await page.locator('.blog-list-hero').textContent().catch(() => 'NOT FOUND');
  console.log('HERO TEXT:', heroText.trim().substring(0, 120));

  const cardCount = await page.locator('.blog-card').count();
  console.log('BLOG CARDS TOTAL:', cardCount);

  const featuredTitle = await page.locator('.blog-featured__title').textContent().catch(() => 'NOT FOUND');
  console.log('FEATURED TITLE:', featuredTitle.trim());

  const categories = await page.locator('.blog-card__category').allTextContents();
  console.log('CATEGORIES:', JSON.stringify(categories));

  const hasImg = await page.locator('.blog-card__img img').count();
  console.log('CARD IMAGES:', hasImg);

  // 2. Blog post page
  await page.goto('http://localhost:5174/blog/o-depresii', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'tmp_blog_post_top.png', fullPage: false });

  const postTitle = await page.locator('.post-hero__title').textContent().catch(() => 'NOT FOUND');
  console.log('POST TITLE:', postTitle.trim());

  const backBtn = await page.locator('.post-hero__back').textContent().catch(() => 'NOT FOUND');
  console.log('BACK BTN:', backBtn.trim());

  const sectionCount = await page.locator('.post-section').count();
  console.log('POST SECTIONS:', sectionCount);

  const authorText = await page.locator('.post-author__name').textContent().catch(() => 'NOT FOUND');
  console.log('AUTHOR:', authorText.trim());

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'tmp_blog_post_bottom.png', fullPage: false });

  const moreSection = await page.locator('.post-more').textContent().catch(() => 'NOT FOUND');
  console.log('MORE SECTION:', moreSection.trim().substring(0, 100));

  // 3. 404 redirect
  const navResp = await page.goto('http://localhost:5174/blog/nonexistent', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  console.log('404 REDIRECT URL:', page.url());

  // 4. Quick check: does Blog link appear active on blog page?
  await page.goto('http://localhost:5174/blog', { waitUntil: 'networkidle' });
  const activeLink = await page.locator('.header__link--active').textContent().catch(() => 'NOT FOUND');
  console.log('ACTIVE NAV LINK:', activeLink.trim());

  await browser.close();
  console.log('DONE');
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
