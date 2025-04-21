interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://elsteinm.github.io/', // Write here your website url
	author: 'Elad Steinmetz', // Site author
	title: "Elad's Nonsense", // Site title.
	description: 'I write about nonsense when I feel like it', // Description to display in the meta tags
	lang: 'he-IL',
	ogLocale: 'he-IL',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
