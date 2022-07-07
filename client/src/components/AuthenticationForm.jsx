import ImageInput from './ImageInput';

const AuthenticationForm = (props) => {
  const handleSubmission = (event) => {
    event.preventDefault();
    props.onAuthenticationSubmit();
  };

  return (
    <div>
      <form onSubmit={handleSubmission}>
        {props.displayInputs.includes('name') && (
          <>
            <label htmlFor="input-name">Name</label>
            <input
              type="text"
              id="input-name"
              placeholder="Name"
              value={props.user.name}
              onChange={(event) =>
                props.onUserChange({
                  ...props.user,
                  name: event.target.value
                })
              }
            />
          </>
        )}

        {props.displayInputs.includes('email') && (
          <>
            <label htmlFor="input-email">Email</label>
            <input
              id="input-email"
              type="email"
              placeholder="Email"
              value={props.user.email}
              onChange={(event) =>
                props.onUserChange({
                  ...props.user,
                  email: event.target.value
                })
              }
            />
          </>
        )}

        {props.displayInputs.includes('picture') && (
          <>
            <label htmlFor="input-picture">Picture</label>
            {/* <input
              id="input-picture"
              type="picture"
              placeholder="Picture"
              value={props.user.picture}
              onChange={(event) =>
                props.onUserChange({
                  ...props.user,
                  picture: event.target.value
                })
              }
            /> */}
            <ImageInput
              style={{ width: '10%' }}
              image={props.user.picture}
              onImageChange={(url) =>
                props.onUserChange({ ...props.user, picture: url })
              }
            />
          </>
        )}
        <br />

        {props.displayInputs.includes('password') && (
          <>
            <label htmlFor="input-password">Password</label>
            <input
              id="input-password"
              type="password"
              placeholder="Password"
              value={props.user.password}
              onChange={(event) =>
                props.onUserChange({
                  ...props.user,
                  password: event.target.value
                })
              }
            />
          </>
        )}
        <br />

        <button style={{ fontSize: 20 }}>{props.buttonLabel}</button>
      </form>
    </div>
  );
};

export default AuthenticationForm;
