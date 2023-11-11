<script>
	export let title = "Ellie's blog";
	export let description = "Welcome to Ellie's blog!";
	export let image = "/favicon.png";
</script>

<title>🌸 {title}</title>
<meta name="og:title" content={"🌸 " + title} />
<meta name="twitter:title" content={"🌸 " + title} />

<meta name="description" content={description} />
<meta name="og:description" content={description} />
<meta name="twitter:description" content={description} />

<meta name="image" content={image} />
<meta
	name="og:image"
	itemprop="image"
	content={`https://elliesblog.netlify.app${image}`}
/>
<meta
	name="twitter:image:src"
	content={`https://elliesblog.netlify.app${image}`}
/>
