import React from 'react';

const ExercisesList = ({ exercises }) => {
  return (
    <div>
      {exercises &&
        exercises.map((ex) => (
          <div key={ex.id}>
            <h3>{ex.name}</h3>
            <p>{ex.description}</p>
          </div>
        ))}
    </div>
  );
};

export default ExercisesList;
