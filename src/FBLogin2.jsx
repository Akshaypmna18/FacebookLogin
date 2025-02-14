import React, { useEffect } from "react";

const FacebookBusinessLogin = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: "2525589477642277",
        cookie: true,
        xfbml: true,
        version: "v20.0",
      });
    };

    (function (d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

const handleLoginClick = () => {
  if (!window.FB) {
    alert("Facebook SDK not loaded yet!");
    return;
  }

  const redirectUri ="https://app.admini.co.in/dashboard/settings"

  FB.login(
    function (response) {
      console.log("Facebook Login Response:", response);

      if (response.authResponse) {
        const authCode = response.authResponse.code;

        const appId = "2525589477642277";
        const appSecret = "5e5dc837d3b9c485981b088b1f8fdf33";

        const url = `https://graph.facebook.com/v20.0/oauth/access_token?client_id=${appId}&redirect_uri=${redirectUri}&client_secret=${appSecret}&code=${authCode}`;

        fetch(url)
          .then((response) => response.json())
          .then((data) => console.log("Response:", data))
          .catch((error) => console.error("Error:", error));
      }
    },
    {
      config_id: "1121290476363268",
      response_type: "code",
      override_default_response_type: true,
      auth_type: "rerequest",
      redirect_uri: "https://app.admini.co.in/dashboard/settings?tab=facebookLogin2",
    }
  );
};

  return (
    <div>
      <button onClick={handleLoginClick}>Login with Facebook business</button>
    </div>
  );
};

export default FacebookBusinessLogin;
