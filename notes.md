# Setup

## [1. Bundler](https://mdxjs.com/docs/getting-started/#bundler)

For Next.js and Webpack, the bundler to convert MDX to JS is
[`@mdx-js/loader`](https://mdxjs.com/packages/loader)

## [2. JSX](https://mdxjs.com/docs/getting-started/#jsx)

With React:

1. There's no need to configure the JSX runtime (i.d MDX 🤝 JSX)
2. Install and configure [`@mdx-js/react`](https://mdxjs.com/packages/react)

## [3. Types](https://mdxjs.com/docs/getting-started/#types)

To enable types for imported `/.mdx` or `.mdx.js` files, install
[`@types/mdx-js__react`](https://yarnpkg.com/package/@types/mdx-js__react)

## [4. Webpack](https://mdxjs.com/docs/getting-started/#webpack)

Install and configure the webpack loader [`@mdx-js/loader`](https://mdxjs.com/packages/loader)

## [5. React](https://mdxjs.com/docs/getting-started/#react)

React is supported right OOTB. You can optionally install and configure
[`@mdx-js/react`](https://mdxjs.com/packages/react/), which allows for context based component passing.

## [6. Using MDX](https://mdxjs.com/docs/getting-started/#using-mdx)

## [7. Extending MDX](https://mdxjs.com/docs/getting-started/#extending-mdx)


- MyApp
	- AppShell
		- Page (components/Layout)
			- MenuProvider
				- Nav
				- Sidebar
				- MDXContent
				- Footer

<!--  -->
1. Links/diff between internal and external md links
2. correct markdown links
3. Look into useRouteMeta

## Bugs?
1. Headings with {{ }} are not showing on TOC
2. "this is breaking the layout" in /response_headers
3. Tables are not fully responsive.

1. Syntax highlights
2. Media — images, videos,
3. Dark mode (do it like FB did it.)
4. Responsiveness
5. Components documentation
6. Cleanups from the old docs — favicon, SEO, comments...
7. Search
8. Edit on GitHub
9. Feedback form
10. 404 page


[] Responsiveness
[] Headings...
[] File path
[] themecomponent for media queries.


## Errors.

1. /deploy-to-layer0 — responsiveness error
	2. guides/production
2. /guides/core_web_vitals - video rendering.
3. Responsiveness issues when width < 500px