# Structure Blog Scaffold

A drop-in blog system for usestructure.com built on Next.js App Router.
Posts live as MDX files in the repo. Everything is statically generated and SEO-ready out of the box.

---

## What's included

```
lib/
  site.ts                          → site config + category definitions
  posts.ts                         → MDX parsing, typed frontmatter
  authors.ts                       → author profile lookup

app/
  sitemap.ts                       → /sitemap.xml (auto-generated)
  robots.ts                        → /robots.txt
  blog/
    page.tsx                       → /blog (post listing)
    [slug]/
      page.tsx                     → /blog/{slug} (post page + Article schema)
      opengraph-image.tsx          → auto-generated OG image per post
    category/[category]/page.tsx   → /blog/category/{category}
    author/[author]/page.tsx       → /blog/author/{author} (+ Person schema)
    feed.xml/route.ts              → /blog/feed.xml (RSS)

content/
  posts/
    annual-home-maintenance-checklist.mdx   → sample post
  authors/
    structure-team.json            → sample author
```

---

## 1. Install dependencies

```bash
npm install gray-matter reading-time next-mdx-remote remark-gfm rehype-slug rehype-autolink-headings
```

If you don't already have it for typography:

```bash
npm install -D @tailwindcss/typography
```

Then in `tailwind.config.ts`:

```ts
plugins: [require("@tailwindcss/typography")],
```

The `prose` class on the post page depends on this.

---

## 2. Drop in the files

Copy each folder into your existing project. Paths assume your `tsconfig.json` has `"@/*": ["./*"]` (the Next.js default). If yours differs, adjust the imports.

The `app/robots.ts` and `app/sitemap.ts` files go at the **root** of your `app/` directory — they replace any static `robots.txt` or `sitemap.xml` in `public/`. Delete the static versions if you have them.

---

## 3. Update `siteConfig`

Open `lib/site.ts` and replace the `twitter` handle with your real one. Verify `url` matches your canonical domain (`https://www.usestructure.com` with or without `www` — pick one and stick with it; Google treats them as different sites).

Adjust category labels and descriptions in `BLOG_CATEGORIES` if you want different copy.

---

## 4. Write a post

Create a new file at `content/posts/your-slug.mdx` with this frontmatter:

```yaml
---
title: "Your Post Title"
description: "150–160 character meta description. This shows in Google results."
publishedAt: "2026-05-20"
updatedAt: "2026-05-20"
author: "structure-team"
category: "homeowners"  # one of: homeowners | landlords | hosting | property-managers
tags: ["maintenance", "checklists"]
featuredImage: "/blog/img/your-image.jpg"  # optional, 1200x630
draft: false
---

Your post body in markdown / MDX...
```

The URL slug comes from the filename: `your-slug.mdx` → `/blog/your-slug`.

Set `draft: true` to keep a post out of production builds while you work on it.

---

## 5. Pre-launch checklist

Before publishing your first post:

- [ ] Replace `twitter` handle in `lib/site.ts`
- [ ] Confirm canonical domain (`www` or no-`www`) is consistent everywhere
- [ ] Add a real author photo at `/public/blog/authors/structure-team.jpg`
- [ ] Add a default OG image at `/public/img/og-default.png` (1200×630)
- [ ] Verify the site in **Google Search Console** (https://search.google.com/search-console)
- [ ] Submit `https://www.usestructure.com/sitemap.xml` in Search Console
- [ ] Set up **Bing Webmaster Tools** (https://www.bing.com/webmasters) — quick win
- [ ] Wire up analytics (GA4 or Plausible)
- [ ] Add the blog link to your main site nav
- [ ] Test a post URL with the Rich Results Tool (https://search.google.com/test/rich-results) — Article schema should pass

---

## 6. Maintenance habits

- **Bump `updatedAt`** when you edit a post. Google notices.
- **Internal link** between posts. Every new post should link to at least two existing ones plus one product page.
- **Keep a redirects map** in `next.config.mjs` for any slug you rename:
  ```js
  async redirects() {
    return [{ source: '/blog/old-slug', destination: '/blog/new-slug', permanent: true }];
  }
  ```
- **Refresh top-performing posts** every 6 months. A 20-minute update often outranks a brand-new article.

---

## Next steps after launch

1. Build a `<PostCTA category={...} />` component to drop into every post — links readers to the matching segment page. There's a TODO comment marking the spot in `app/blog/[slug]/page.tsx`.
2. Add a `<RelatedPosts />` component (same category, exclude current post).
3. Add a `<TableOfContents />` component for long-form pillar posts.
4. Set up a rank tracker (SE Ranking, Nozzle, or similar) so you can measure what's working.

Once this is live, we can shift to content strategy: target keywords, post topics, and a publishing calendar.
