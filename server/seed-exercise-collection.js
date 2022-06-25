const exerciseList = require('./data/exercise-list.json');
const Exercise = require('./models/exercise');

const exercisesWithoutIds = exerciseList.map(({ id, ...exercise }) => exercise);

const seedExerciseCollectionIfNeeded = () =>
  Exercise.count().then((total) => {
    if (total !== exercisesWithoutIds.length) {
      return Exercise.create(exercisesWithoutIds);
    }
  });

module.exports = seedExerciseCollectionIfNeeded;
