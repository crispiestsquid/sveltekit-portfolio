import { contentfulClient } from '$lib/server/contentful';

export async function load() {
	try {
		const query = { content_type: 'blogPost', select: 'fields.slug,fields.title,sys.createdAt' };
		const data = await contentfulClient.getEntries(query);

		const blogPosts = data.items.map((item) => {
			return {
				title: item.fields.title,
				slug: item.fields.slug,
				postDate: item.sys.createdAt
			};
		});

		return { blogPosts };
	} catch (error) {
		return {
			status: 500,
			error: new Error('Internal Server Error')
		};
	}
}
