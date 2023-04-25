# IronPump

Welcome to IronPump. This is a fitness app that allows you to look for fitness exercises and create and manage your own workouts.

https://ironpump.netlify.app/

![image](https://user-images.githubusercontent.com/54202438/178937358-bc9eef63-8fe9-48aa-a25f-3723769e645b.png)



## Pages

- Home - / - Display body parts list and premade workouts.✅

- Register - /register - Allow visitor to create account with name, email, password and profile picture. ✅

- Log In - /log-in - Allows existing user to log-in. ✅

- Profile Edit - /profile/edit - Allows authenticated user to edit their profile.✅

- Profile - /profile/:id - Visualize users' profile and show workouts created.✅

- Body Part Page - /exercise/part/:partName - Visualize list exercises from a body part. ✅

- Single Exercise Page - /exercise/id/:id - Visualize single exercise details. ✅

- Workout Add - /workout/add - Allows user to post workout. (should list all exercises and allow user to select which exercises go into the new workout) ✅

- Workout Detail - /workout/:id - Visualize single workout details. ✅

- Workout Search - /workout/all - Shows all existing workouts. ✅



## Services

listHomeData - issues GET to '/' - Lists body parts and routines. ({ exercises: [] }).

- registerUser - issues POST to '/authentication/sign-up' - Registers new user. ✅

- logInUser - issues POST to '/authentication/sign-in' - Authenticates existing user. ✅

- signOutUser - issues POST to '/authentication/sign-out' - Signs out user. ✅

- loadUserInformation - issues GET to '/authentication/me' - Loads information about authenticated user. ✅

- profileLoad - issues GET to '/profile/:id' - Loads single users profile. ✅

- profileEdit - issues PATCH to '/profile' - Edit authenticated users profile. ✅

- exerciseList - issues GET to '/exercise/list' - Loads list of all exercises ✅ (NOT USED YET)

- bodyPartList - issues GET to '/exercise/body-parts' -Loads list of body parts. ✅

- exercisesByBodyPart - issues GET to '/exercise/part/partName/page' - Loads exercises from a body part. ✅

- singleExercise - issues GET to '/exercise/id/:id' - Loads single exercise. ✅

- workoutsAll - issues GET to '/workout/all' - Loads all workouts created. ✅

- workoutLoad - issues GET to '/workout/:id' - Loads single workout. ✅

- workoutAdd - issues POST to '/workout' - Allows user to add workout. ✅

- workoutDelete - issues DELETE to '/workout/:id' - Allows user to delete workout. ✅



# Server


## Models

### Exercise ✅

- name: String, required.

...other properties of exercise objects execpt id


### User ✅

- name: String, required, trim.

- picture: String, trim.

- email: String, required, trim, lowercase.

- passwordHashAndSalt: String, required.

- picture: String.


### Workout ✅

- name: String, required, trim.

- bodyPart: String, enum.

- exercises: [{
      exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' },
      sets: { type: Number },
      repetitions: { type: Number },
      weight: { type: Number }
    }]

- owner: ObjectId, ref: 'User'



## Request Handlers

```javascript
GET - / - Lists Navbar, Body Parts. ✅
```

```javascript
POST - '/authentication/sign-up' - Registers new user. ✅
```

```javascript
POST - '/authentication/sign-in' - Authenticates existing user. ✅
```

```javascript
POST - '/authentication/sign-out' - Signs out user. ✅
```

```javascript
GET - '/authentication/me' - Loads information about authenticated user. ✅
```

```javascript
GET - '/profile/:id' - Loads single users profile.✅
```

```javascript
PATCH - '/profile' - Edit authenticated users profile.✅
```

```javascript
GET - '/exercise/get-multiple-exercises' - Allows user to look for multiple exercises. ✅
```

```javascript
GET - '/exercise/list' - Lists all exercises. ✅
```

```javascript
GET - '/exercise/body-parts' - Loads list body parts. ✅
```

```javascript
GET - '/exercise/part/:partName - List exercises from a body part. ✅
```

```javascript
GET - '/exercise/id/:id' - Loads single exercise. ✅
```

```javascript
GET - '/workout/all' - Loads all workouts. ✅
```

```javascript
GET - '/workout/:id' - Loads single workout. ✅
```

```javascript
PATCH - '/workout/:id' - Allows user to edit wokout. ✅
```

```javascript
POST - '/workout' - Allows user to create workout. ✅
```

```javascript
DELETE - '/workout/:id' - Allows user to delete workout. ✅
```

## Tools used


<p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="Javascript" /></a> <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a> <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a> <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a> <a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a> <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a> <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a> </p> 



## Wishlist

- Register - Add motivational phrase, hobbies, etc..

- Find users nearby.

- Routine tags: Equipment, etc..

- Personal best: sets, reps, etc...

- Profile Search - /profile/search - Search for users. 

- Exercise Search - /exercise/search - Search for exercises.

- Workout Search - /workout/search - Allows user to search for specific workout.

- Workout Edit - /workout/:id/edit - Allows user to edit workout.



