function formatIsoDateString(isoString) {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const date = new Date(isoString);
	const year = date.getFullYear();
	const month = months[date.getMonth()];
	const day = date.getDate();

	return `${month} ${day}, ${year}`;
}

export { formatIsoDateString };
