// Dependencies
import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {fetchPet} from '../api/fetchPet';

export const Details = () => {
	const {id} = useParams();
	const results = useQuery(['details', id], fetchPet);
	//console.log('results: ', results);

	if (results.isLoading) {
		return (
			<div className='loading-pane'>
				<h2 className='loeder'>...</h2>
			</div>
		);
	}

	//const pet = results.data.pets[0];
	const [pet] = results.data.pets;

	return (
		<div className="details">
			<div>
				<h1>{pet.name}</h1>
				<h2>{`${pet.animal} - ${pet.breed} - ${pet.city} - ${pet.state}`}</h2>
				<p>{pet.description}</p>
				<button>Adopt {pet.name}</button>
			</div>
		</div>
	);
};
