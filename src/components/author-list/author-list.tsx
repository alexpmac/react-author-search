import { Author } from "../../app/api";

interface AuthorListProps {
	authors: Author[];
	results?: number;
	className?: string;
}

export function AuthorList({ authors, results, className }: AuthorListProps) {
	const limit = results ?? authors.length;
	const items = authors.slice(0, results ?? authors.length);

	return (
		<div>
			<span>Top {limit} titles:</span>
			<ul className={className}>
				{items.map(x => (
					<li key={x.key}>
						{x.name}
					</li>
				))}
			</ul>
		</div>
	);
}
