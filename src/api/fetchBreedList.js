// fetchBreedlist
export const fetchBreedList = async ({queryKey}) => {
	console.log('queryKey: ', queryKey);
	const animal = queryKey[1];

	if (!animal) {return [];}

	const resApi = await fetch (
		`http://pets-v2.dev-apis.com/breeds?animal=${animal}`
	);

	if (!resApi.ok) {
		throw new Error(`breeds ${animal} fetch not OK`);
	}

	return resApi.json();
};
