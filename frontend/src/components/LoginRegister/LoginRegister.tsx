import React from "react";

interface IFormProps {
  isRegister: boolean;
}

const LoginRegister = (props: IFormProps): React.ReactElement => {
  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
          <img src="assets/images/wave.png" className="image" />
          <div className="content">Register for an account</div>
        </h2>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="username" placeholder="Username" />
              </div>
            </div>
            {props.isRegister && (
              <>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      type="text"
                      name="first-name"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
              </>
            )}
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="ui fluid large teal submit button">Register</div>
          </div>

          <div className="ui error message"></div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
