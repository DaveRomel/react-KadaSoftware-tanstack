// Dependencies
//import React from 'react';
import {useState, /*useEffect*/ } from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchSearch} from '../api/fetchSearch';

// Components
//import { Pet } from './Pet'
import { Results } from './Results';

// Custom Hook
import {useBreedList} from '../hooks/useBreedList';

// Constants
const Animals = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

export const SearchParams = () => {
/*
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
*/
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  });
  const [animal, setAnimal] = useState('');
  //const [pets, setPets] = useState([]);
  //const breeds = [];
  //const breeds = ['croquetas', 'semillas', 'carne'];
  const [breeds] = useBreedList(animal);
/*
  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line

  async function requestPets() {
    const res = await fetch (
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();

    setPets(json.pets);
  }

  //console.log('perts: ', pets);
*/
  const results = useQuery(['search', requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form onSubmit={ (e) => {
        e.preventDefault();
        //requestPets();
        const formData = new FormData(e.target);
        const obj = {
          animal: formData.get('animal') ?? '',
          location: formData.get('location') ?? '',
          breed: formData.get('breed') ?? '',
        };
        setRequestParams(obj);
        }}
      >

        <label htmlFor="location">
          Location
          <input
            id="location"

            placeholder="Location"
            name="location"

          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"

            name="animal"
            onChange={ (e) => {setAnimal(e.target.value)
            //setBreed('');
            }}
          >
            <option>
              Select Animal
            </option>
            {Animals.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds?.length}
            id="breed"

            name="breed"

          >
            <option />
            {breeds?.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );

};
