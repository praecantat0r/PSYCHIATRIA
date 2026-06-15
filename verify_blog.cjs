const { chromium } = require('./node_modules/@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  // 1. Blog list page
  await page.goto('http://localhost:5174/blog', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'tmp_blog_list.png', fullPage: false });

  const navLinks = await page.locator('.header__nav a').allTextContents();
  console.log('NAV LINKS:', JSON.stringify(navLinks));

  const heroEl = await page.locator('.blog-list-hero').textContent().catch(() => 'NOT FOUND');
  console.log('HERO TEXT:', heroEl.trim().substring(0, 120));

  const cardCount = await page.locator('.blog-card').count();
  console.log('BLOG CARDS:', cardCount);

  const featuredTitle = await page.locator('.blog-featured__title').textContent().catch(() => 'NOT FOUND');
  console.log('FEATURED TITLE:', featuredTitle.trim());

  const cats = await page.locator('.blog-card__category').allTextContents();
  console.log('CATEGORIES:', JSON.stringify(cats));

  const imgCount = await page.locator('.blog-card__img img, .blog-featured__img img').count();
  console.log('IMAGES:', imgCount);

  // 2. Blog post page
  await page.goto('http://localhost:5174/blog/o-depresii', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'tmp_blog_post_top.png', fullPage: false });

  const postTitle = await page.locator('.post-hero__title').textContent().catch(() => 'NOT FOUND');
  console.log('POST TITLE:', postTitle.trim());

  const backBtn = await page.locator('.post-hero__back').textContent().catch(() => 'NOT FOUND');
  console.log('BACK BTN:', backBtn.trim());

  const sections = await page.locator('.post-section').count();
  console.log('SECTIONS:', sections);

  const authorName = await page.locator('.post-author__name').textContent().catch(() => 'NOT FOUND');
  console.log('AUTHOR NAME:', authorName.trim());

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'tmp_blog_post_bottom.png', fullPage: false });

  const moreCards = await page.locator('.post-more .blog-card').count();
  console.log('MORE CARDS:', moreCards);

  // 3. 404 redirect
  await page.goto('http://localhost:5174/blog/nonexistent', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  console.log('404 REDIRECT:', page.url());

  // 4. Active link
  await page.goto('http://localhost:5174/blog', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  const activeLink = await page.locator('.header__link--active').textContent().catch(() => 'NOT FOUND');
  console.log('ACTIVE LINK:', activeLink.trim());

  await browser.close();
  console.log('DONE');
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
