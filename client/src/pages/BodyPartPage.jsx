import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { exercisesByBodyPart } from '../services/exercise';

import './BodyPartPage.scss';

const BodyPartPage = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [part, setPart] = useState();
  const [page, setPage] = useState(1);

  const { partName } = useParams();

  const handlePrevious = () => {
    const previousPage = Math.max(page - 1, 1);
    console.log(page, previousPage);
    setPage(previousPage);
  };
  const handleNext = () => {
    const nextPage = Math.min(page + 1, 40);
    console.log(page, nextPage);
    setPage(nextPage);
  };

  useEffect(() => {
    exercisesByBodyPart(partName, page).then((data) => {
      console.log(data);
      setPart(data.exercises);
    });
  }, [partName, page]);

  //   return (
  //     <div>
  //       {part &&
  //         part.map((exercises, index) => (
  //           <ul key={index}>
  //             <li>{exercises.name}</li>
  //           </ul>
  //         ))}
  //     </div>
  //   );
  // };

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      {(user && (
        <div className="exercises-bodypart">
          <h1>{partName}</h1>
          {part &&
            part.map((exercises, index) => {
              return (
                <Link key={index} to={`/exercise/id/${exercises.id}`}>
                  <li>{exercises.name}</li>
                  <img src={exercises.gifUrl} alt={exercises.name} />
                </Link>
              );
            })}
        </div>
      )) || (
        <>
          <h2>You need to be registered to access this page</h2>
          <Link to="/log-in">Log In</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default BodyPartPage;
// const HouseDetailPage = () => {
//   const { id } = useParams();

//   const [house, setHouse] = useState(null);

//   useEffect(() => {
//     houseLoad(id).then((data) => setHouse(data.house));
//   }, [id]);
