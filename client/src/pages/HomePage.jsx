import { bodyPartList } from '../services/exercise';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import ReactPlayer from 'react-player';
import './HomePage.scss';

const capitalizeFirstLowercaseRest = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const HomePage = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [bodyParts, setBodyPart] = useState([]);

  useEffect(() => {
    bodyPartList().then((data) => {
      console.log(data);
      setBodyPart(data.bodyParts);
    });
  }, []);

  //return (
  //  <div>
  //    <h1> Hola esto es un test</h1>
  //    {bodyParts &&
  //      bodyParts.map((part) => (
  //        <ul key={part.name}>
  //          <li>{part.name}</li>
  //        </ul>
  //      ))}
  //  </div>
  //);

  return (
    <div>
      {(user && (
        <>
          <h1> Part of the body you want to train</h1>

          <div className="grid">
            {bodyParts &&
              bodyParts.map((part) => {
                return (
                  <Link
                    key={part.name}
                    to={`/exercise/part/${part.name}`}
                    className="grid-item"
                  >
                    <h1>{capitalizeFirstLowercaseRest(part.name)}</h1>
                    <img
                      src={part.image}
                      alt={part.name}
                      style={{ width: 200, height: 300 }}
                    />
                  </Link>
                );
              })}
          </div>
        </>
      )) || (
        <>
          <span>Welcome to IronPump</span>
          <ReactPlayer
            //url="https://www.youtube.com/watch?v=vi1-4fcX_ig"
            url={require('../video/test.mp4')}
            width="100%"
            height="100%"
            playing
            loop={true}
            muted={true}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;

// const [exercises, setExercises] = useState();

// useEffect(() => {
//   exerciseList().then((data) => setExercises(data.exercises));
// }, [exercises]);

// {
//   /* {exercises &&
//     exercises.map((exercise) => (
//       <ul>
//         <li key={exercise.id}>{exercise.name}</li>
//       </ul>
//   ))} */
// }
