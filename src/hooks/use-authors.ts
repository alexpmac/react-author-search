import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAuthorsAsync, selectAuthors } from "../slices/author-slice";

export function useAuthors() {
	const authors = useAppSelector(selectAuthors);
	const dispatch = useAppDispatch()

	return { 
		value: authors.value,
		status: authors.status,
		query: (query: string) => dispatch(getAuthorsAsync(query))
	}
}