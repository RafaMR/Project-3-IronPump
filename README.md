## Pages

Home - / - Display exercise list and premade workouts.

Register - /register - Allow visitor to create account with name, email, password and profile picture. ✅

Log In - /log-in - Allows existing user to log-in. ✅

Profile Search - /profile/search - Search for users. ✅

Profile Edit - /profile/edit - Allows authenticated user to edit their profile.✅

Profile - /profile/:id - Visualize users' profile and show last 3 training routines made.✅

Exercise Search - /exercise/search - Search for exercises.

Exercise Detail - /exercise/:id - Visualize single exercise details.

Workout Search - /workout/search - Search for exercises.

Workout Detail - /workout/:id - Visualize single workout details.

Workout Add - /workout/add - Allows user to post workout. (should list all exercises and allow user to select which exercises go into the new workout)

Workout Edit - /workout/:id/edit - Allows user to post workout.

## Services

listHomeData - issues GET to '/' - Lists exercises and routines. ({ exercises: [] }).

registerUser - issues POST to '/authentication/sign-up' - Registers new user. ✅

logInUser - issues POST to '/authentication/sign-in' - Authenticates existing user. ✅

signOutUser - issues POST to '/authentication/sign-out' - Signs out user. ✅

loadUserInformation - issues GET to '/authentication/me' - Loads information about authenticated user. ✅

profileSearch - issues GET to '/profile/search' - Allows user to search for other user profiles. ✅

profileLoad - issues GET to '/profile/:id' - Loads single users profile. ✅

profileEdit - issues PATCH to '/profile' - Edit authenticated users profile. ✅

exerciseSearch - issues GET to '/exercise/search' - Allows user to search for exercises.✅

exerciseLoad - issues GET to '/exercise/:id' - Loads single exercise

workoutSearch - issues GET to '/workout/search' - Allows user to search for workouts.

workoutLoad - issues GET to '/workout/:id' - Loads single workout.

workoutEdit - issues PATCH to '/workout/:id' - Allows user to edit workout created by them. Authenticated usesr.

workoutAdd - issues POST to '/workout' - Allows user to create workout.

workoutDelete - issues DELETE to '/workout/:id' - Allows user to delete workout.

### Server

## Models

User ✅

name: String, required, trim.

email: String, required, trim, lowercase.

passwordHashAndSalt: String, required.

picture: String.

Exercise ✅

name: String, required.

...other properties of exercise objects execpt id

Workout ✅

name: String, required.

description: String.

creator: ObjectId, ref: 'User', required.

exercises: Array of ObjectId, ref: 'Exercise', required.

sets: [{
exercise: ObjectId, ref: 'Exercise', required
repetitions: Number
weight: Number
}]

## Request Handlers

GET - / - Lists exercises and routines. ({ exercises: [] }).

POST - '/authentication/sign-up' - Registers new user. ✅

POST - '/authentication/sign-in' - Authenticates existing user. ✅

POST - '/authentication/sign-out' - Signs out user. ✅

GET - '/authentication/me' - Loads information about authenticated user. ✅

GET - '/profile/search' - Allows user to search for other user profiles. ✅

GET - '/profile/:id' - Loads single users profile.✅

PATCH - '/profile' - Edit authenticated users profile.✅

GET - '/exercise/list' - Allows user to search for exercises. ✅

GET - '/exercise/:id' - Loads single exercise. ✅

GET - '/exercise/search' - Allows user to search for exercises. ✅

GET - '/exercise/body-parts' - Allows user to search for exercises based on body parts. ✅ Extra added by Ze ??

GET - '/workout/search' - Allows user to search for workouts.

GET - '/workout/:id' - Loads single workout.

POST - '/workout' - Allows user to create workout.

PATCH - '/workout/:id' - Allows user to edit wokout.

DELETE - '/workout/:id' - Allows user to delete workout.

## Wishlist

Register - Add motivational phrase, hobbies, etc..

Find users nearby.

Routine tags: Equipment, etc..

Personal best: sets, reps, etc...

Message Thread List - /message/list - Lists all message threads of an authenticated user.

Message Thread Detail - /message/:id - Displays single message thread between authenticated user and another user. Allows authenticated userd to send new message.

GET - '/message/list' - List all message threads of an authenticated user.

GET - '/message/:id' - List all messages between authenticated user and user of id param.

POST - '/message/:id' - Send message between authenticated user and user of id param.

messageThreadList - issues GET to '/message/list' - List all message threads of an authenticated user.

messageThreadLoad - issues GET to '/message/:id' - List all messages between authenticated user and user of id param.

messageSend - issues POST to '/message/:id' - Send message between authenticated user and user of id param.
