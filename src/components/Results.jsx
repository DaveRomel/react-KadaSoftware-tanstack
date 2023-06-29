// Dependencies
import {Pet} from './Pet';

export const Results = ({pets}) => (
	<div className="search">
		{!pets.length ? (
			<h1>No pets found!</h1>
		) : (
			pets.map((pet) => (
				<Pet
					id={pet.id}
					key={pet.id}
					images={pet.images}
					location = {`${pet.city}, ${pet.state}`}
					name = {pet.name}
					animal={pet.animal}
					breed={pet.breed}
				/>
	    	))
		)}
	</div>
);
