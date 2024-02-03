import { useState } from 'react'
import { puppyList } from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (id) => {
    setFeatPupId(id);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <div key={puppy.id} onClick={() => handleClick(puppy.id)}>
          <h2>{puppy.name}</h2>
          {featPupId && (
            <div>
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
