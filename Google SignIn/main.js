function signIn() {
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
  
    let form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", oauth2Endpoint);
  
    let params = {
      client_id:
        "473783905706-31tvflj96sc6v98813ovnag3a0a3j3so.apps.googleusercontent.com",
      redirect_uri: "http://127.0.0.1:5500/profile.html",
      response_type: "token",
      scope:
        "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
      include_granted_scopes: "true",
      state: "pass-th", // Corrected from "stare" to "state"
    };
  
    for (const p in params) {
      let input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }
    document.body.appendChild(form);
  
    form.submit();
  }
// Google login end
