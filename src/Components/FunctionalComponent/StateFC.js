import React, { useState } from "react";

function StateFC() {
  const [message, setMessage] = useState("Welcome visitor");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleSubscription = () => {
    setMessage(isSubscribed ? "Welcome visitor" : "Thanks for subscribing");
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div>
      <h4>StateFC : {message}</h4>
      <button onClick={toggleSubscription}>
        {isSubscribed ? "Unsubscribe" : "Subscribe"}
      </button>
    </div>
  );
}

export default StateFC;
