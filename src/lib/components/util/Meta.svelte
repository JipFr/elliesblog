<script lang="ts">
	export let title = "Ellie's blog";
	export let description = "Welcome to Ellie's blog!";
	export let image = "/favicon.png";

	$: titleResult = "🌸 " + (title || "Ellie's blog");
	$: descriptionResult = description || "Welcome to Ellie's blog!";
	$: imageResult = image || "/favicon.png";
</script>

<title>{titleResult}</title>
<meta name="og:title" content={titleResult} />
<meta name="twitter:title" content={titleResult} />

<meta name="description" content={descriptionResult} />
<meta name="og:description" content={descriptionResult} />
<meta name="twitter:description" content={descriptionResult} />

<meta name="image" content={imageResult} />
<meta
	name="og:image"
	itemprop="image"
	content={`https://elliesblog.netlify.app${imageResult}`}
/>
<meta
	name="twitter:image:src"
	content={`https://elliesblog.netlify.app${imageResult}`}
/>
