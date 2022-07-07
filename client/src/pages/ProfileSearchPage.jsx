// import { useState } from 'react';
// import { profileSearch } from '../services/profile';
// import ProfileCard from '../components/ProfileCard';
// import { Link } from 'react-router-dom';

// const ProfileSearchPage = () => {
//   const [term, setTerm] = useState('');
//   const [profiles, setProfiles] = useState([]);

//   const handleSearch = (event) => {
//     event.preventDefault();
//     profileSearch(term).then((data) => {
//       setProfiles(data.profiles);
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <label htmlFor="input-search-term">Search by name</label>
//         <input
//           id="input-search-term"
//           type="text"
//           placeholder="Search for other users..."
//           value={term}
//           onChange={(event) => setTerm(event.target.value)}
//         />
//         <button>Search</button>
//       </form>
//       {profiles.map((profile) => (
//         // <ProfileCard key={profile._id} profile={profile} />
//         <Link key={profile._id} to={`/profile/${profile._id}`}>
//           <h1>CLick here to go to user´s profile</h1>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default ProfileSearchPage;
