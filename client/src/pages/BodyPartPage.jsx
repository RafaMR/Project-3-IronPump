import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { exercisesByBodyPart } from '../services/exercise';

const BodyPartPage = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [part, setPart] = useState();

  const { partName } = useParams();

  useEffect(() => {
    exercisesByBodyPart(partName).then((data) => {
      console.log(data);
      setPart(data.exercises);
    });
  }, [partName]);

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
      {(user && (
        <>
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
