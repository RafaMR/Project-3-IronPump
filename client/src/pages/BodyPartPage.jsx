import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { exercisesByBodyPart } from '../services/exercise';

const BodyPartPage = () => {
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
  );
};

export default BodyPartPage;
// const HouseDetailPage = () => {
//   const { id } = useParams();

//   const [house, setHouse] = useState(null);

//   useEffect(() => {
//     houseLoad(id).then((data) => setHouse(data.house));
//   }, [id]);
