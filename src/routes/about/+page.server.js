import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { fetchContentful } from '$lib/server/contentful';
import { MY_AUTHOR_ID } from '$env/static/private';

export async function load() {
	try {
		const query = `content_type=author&sys.id=${MY_AUTHOR_ID}&limit=1`;
		const data = await fetchContentful(query);

		if (!data.items.length) {
			return {
				status: 404,
				error: new Error('Author not found')
			};
		}

		const author = data.items[0].fields;

		if (author.profilePicture) {
			const assetId = author.profilePicture.sys.id;
			const asset = data.includes.Asset.find((asset) => asset.sys.id === assetId);
			author.profilePicture = `https:${asset.fields.file.url}`;
		}

		if (author.bio) {
			author.bio = documentToHtmlString(author.bio);
		}

		return { author };
	} catch (error) {
		return {
			status: 500,
			error: new Error('Internal Server Error')
		};
	}
}
