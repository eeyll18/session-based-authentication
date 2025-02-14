/*
    it is a stateful authentication method, that uses session on the
    server side and cookies, local storage or session storage on the client side
    to keep track of authenticated user.
    if the credentials are valid, server creates a user session. Inside
    the session contains data about the user like ID, email and etc, and 
    also contains unique session ID. The session date can be stored in
    memory or in database, session ID returned to the browser as a response
    browser will store the session ID in cookies or local storage or session storage
    user logs out: session is destroyed and session ID deleted from browser

*/