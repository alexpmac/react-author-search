import { useState } from 'react';
import { AuthorList } from './components/author-list';
import { useAuthors } from './hooks/use-authors';
import './app.css';

export function App() {
	const authors = useAuthors();
	const [query, setQuery] = useState("rowling");
	const showResults = authors.value.results !== undefined && authors.status === "idle";
	const loading = authors.status === "loading";

	return (
		<div className="app">
			<input type="search" value={query} onChange={e => setQuery(e.currentTarget.value)} />
			<button onClick={() => authors.query(query)}>Search</button>
			{loading && (<div>Loading...</div>)}
			{showResults && (
				<section>
					<span>Number of results: {authors.value.results}</span>
					{authors.value.authors.length > 0 && (
						<AuthorList authors={authors.value.authors} results={10} />
					)}
				</section>
			)}
		</div>
	);
}
