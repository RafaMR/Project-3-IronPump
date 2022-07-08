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

  const capitalizeFirstLowercaseRest = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

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

  return (
    <div>
      {(user && (
        <>
          <h1>{capitalizeFirstLowercaseRest(partName)}</h1>
          <br />
          <div className="exercises-bodypart">
            {part &&
              part.map((exercises, index) => {
                return (
                  <Link key={index} to={`/exercise/id/${exercises._id}`}>
                    <h6 style={{ fontSize: 30 }}>
                      {capitalizeFirstLowercaseRest(exercises.name)}
                    </h6>

                    <img src={exercises.gifUrl} alt={exercises.name} />
                  </Link>
                );
              })}
          </div>
          <button
            onClick={handlePrevious}
            style={{ marginRight: 30 }}
            className="bodypart-button"
          >
            Previous
          </button>
          <button onClick={handleNext} className="bodypart-button">
            Next Page
          </button>
        </>
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
