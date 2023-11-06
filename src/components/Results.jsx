// Dependencies
import {Pet} from './Pet';

export const Results = ({pets}) => (
	<div className="search">
		{!pets.length ? (
			<h1>No pets found!</h1>
		) : (
			pets.map((pet) => (
				<Pet
					key={pet.id}
					id={pet.id}
					location = {`${pet.city}, ${pet.state}`}
					images={pet.images}
					name = {pet.name}
					animal={pet.animal}
					breed={pet.breed}
				/>
	    	))
		)}
	</div>
);
