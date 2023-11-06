// Dependencies
import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';

// Api
import {fetchPet} from '../api/fetchPet';

// Components
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';

const Details = () => {
	const {id} = useParams();
	const results = useQuery(['details', id], fetchPet);
	//console.log('results: ', results);

	if (results.isLoading) {
		return (
			<div className='loading-pane'>
				<h2 className='loader'>...</h2>
			</div>
		);
	}

	//const pet = results.data.pets[0];
	const [pet] = results.data.pets;

	return (
		<div className="details">
			<Carousel images={pet.images} />
			<div>
				<h1>{pet.name}</h1>
				<h2>{`${pet.animal} - ${pet.breed} - ${pet.city} - ${pet.state}`}</h2>
				<p>{pet.description}</p>
				<button>Adopt {pet.name}</button>
			</div>
		</div>
	);
};

export default function DetailsErrorBoundary(props) {
	return (
		<ErrorBoundary>
			<Details {...props} />
		</ErrorBoundary>
	);
}
