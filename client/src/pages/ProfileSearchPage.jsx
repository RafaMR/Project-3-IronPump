import { useState, useEffect } from 'react';
const ProfileSearchPage = () => {
  const [term, setTerm] = useState();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {}, [term]);

  return (
    <div>
      <form>
        <label htmlFor="input-search-term">Search by name</label>
        <input
          id="input-search-term"
          type="text"
          placeholder="Search for other users..."
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default ProfileSearchPage;
