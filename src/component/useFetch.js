import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [people, setPeople] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getPeople = async () => {
			const response = await fetch(url);
			const data = await response.json();
			setPeople(data);
			setLoading(false);
		};
		getPeople();
	}, [url]);

	return { loading, people };
};
