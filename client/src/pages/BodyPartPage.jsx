import { useEffect, useState } from 'react';
import { exercisesByBodyPart } from '../services/exercise';

const BodyPartPage = () => {
  const [partName, setPartName] = useState([]);
  useEffect(() => {
    exercisesByBodyPart(partName).then((data) => {
      console.log(data);
      setPartName(data);
    });
  }, []);
  return (
    <div>
      {partName &&
        partName.map((exercise) => (
          <ul>
            <li>{exercise.name}</li>
          </ul>
        ))}
    </div>
  );
};

export default BodyPartPage;
