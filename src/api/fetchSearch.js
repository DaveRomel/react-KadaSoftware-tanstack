export const fetchSearch = async ({queryKey}) => {

	const {animal, location, breed } = queryKey[1];
	const resApi = await fetch(
		`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
	);

	if(!resApi.ok) {
		throw new Error(`pet search no okay: ${animal}, ${location}, ${breed}`);
	}

	return resApi.json();
};