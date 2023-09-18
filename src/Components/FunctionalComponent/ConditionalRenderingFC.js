import React, { useState } from "react";

function ConditionalRenderingFC() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");

  // basics components
  function WelcomeMessageFC() {
    return (
      <>
        <p>Welcome, {userType}!</p>
        <LogoutFC />
      </>
    );
  }
  function LoginFC() {
    return (
      <>
        <LoginAsFC userType="Admin" />
        <LoginAsFC userType="User" />
      </>
    );
  }
  function LoginAsFC({ userType }) {
    let asAdmin = userType === "Admin";
    const logIn = (asAdmin) => {
      setUserType(asAdmin ? "Admin" : "User");
      setIsLoggedIn(true);
    };
    return (
      <button onClick={() => logIn(asAdmin)}>
        Log in as {asAdmin ? "Admin" : "User"}
      </button>
    );
  }
  function LogoutFC({ asAdmin }) {
    const logout = () => {
      setUserType("");
      setIsLoggedIn(false);
    };
    return <button onClick={() => logout()}>Log out</button>;
  }

  // checking rendering
  const renderWithAndOperator = (
    <div>
      {isLoggedIn && <WelcomeMessageFC />}
      {!isLoggedIn && <LoginFC />}
    </div>
  );

  let renderTernary = isLoggedIn ? <WelcomeMessageFC /> : <LoginFC />;

  let renderIIFE = (() => {
    if (isLoggedIn) {
      return <WelcomeMessageFC />;
    } else {
      return <LoginFC />;
    }
  })();

  let renderSwitch;
  switch (userType) {
    case "Admin":
    case "User":
      renderSwitch = <WelcomeMessageFC />;
      break;
    default:
      renderSwitch = <LoginFC />;
  }

  return (
    <div>
      <h2>Conditional Rendering Examples</h2>
      <div>
        <h3>Ternary Operator:</h3>
        {renderTernary}
      </div>
      <div>
        <h3>If Statement (IIFE):</h3>
        {renderIIFE}
      </div>
      <div>
        <h3>Using && Operator:</h3>
        {renderWithAndOperator}
      </div>
      <div>
        <h3>Using switch Statement:</h3>
        {renderSwitch}
      </div>
    </div>
  );
}

export default ConditionalRenderingFC;
