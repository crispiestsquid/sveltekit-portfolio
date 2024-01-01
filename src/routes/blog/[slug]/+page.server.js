import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { contentfulClient } from '$lib/server/contentful';

const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: ({ data: { target } }) => {
			return `<img
								src="https:${target.fields.file.url}?w=1000"
								alt="${target.fields.description}"
								class="embedded-asset"
							/>`;
		}
	}
};

export async function load({ params }) {
	try {
		const query = { content_type: 'blogPost', 'fields.slug': params.slug, limit: 1 };
		const data = await contentfulClient.getEntries(query);

		if (!data.items.length) {
			return {
				status: 404,
				error: new Error('Blog post not found')
			};
		}

		const blogPost = data.items[0].fields;
		blogPost.content = documentToHtmlString(blogPost.content, options);
		const authorId = blogPost.author.sys.id;
		const author = data.includes.Entry.find((entry) => entry.sys.id === authorId).fields;

		if (author.profilePicture) {
			const assetId = author.profilePicture.sys.id;
			const asset = data.includes.Asset.find((asset) => asset.sys.id === assetId);
			author.profilePicture = `https:${asset.fields.file.url}`;
		}

		return { author, blogPost };
	} catch (error) {
		return {
			status: 500,
			error: new Error('Internal Server Error')
		};
	}
}
