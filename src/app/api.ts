export interface Search<T> {
	docs: T[];
	numFound: number;
	numFoundExact: number;
	start: number;
}

export interface Author {
	key: string;
	type: string;
	name: string;
	alternate_names: string[];
	birth_date: string;
	top_work: string,
	work_count: number,
	top_subjects: string[];
	_version_: number
}

export async function getAuthors(query: string) {
	const response = await fetch(`https://openlibrary.org/search/authors.json?q=${query}`);
	const result = await response.json();
	return result as Search<Author>;
}