import contentful from 'contentful';
import {
	CONTENTFUL_SPACE_ID,
	CONTENTFUL_ACCESS_TOKEN,
	CONTENTFUL_ENVIRONMENT_ID
} from '$env/static/private';

const contentfulClient = contentful.createClient({
	space: CONTENTFUL_SPACE_ID,
	accessToken: CONTENTFUL_ACCESS_TOKEN,
	environment: CONTENTFUL_ENVIRONMENT_ID
});

const CONTENTFUL_API_BASE_URL = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT_ID}`;

async function fetchContentful(query) {
	const response = await fetch(`${CONTENTFUL_API_BASE_URL}/entries?${query}`, {
		headers: {
			Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`
		}
	});

	if (!response.ok) {
		throw new Error(`Contentful fetch error: ${response.statusText}`);
	}

	return await response.json();
}

export { contentfulClient, fetchContentful };
