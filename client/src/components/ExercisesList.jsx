import React from 'react';

const ExercisesList = ({ exercises }) => {
  return (
    <div>
      {exercises && exercises.map((ex) => <div key={ex.id}>{ex.name}</div>)}
    </div>
  );
};

export default ExercisesList;
