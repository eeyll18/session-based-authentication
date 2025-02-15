# Stateful Authentication

Stateful authentication is a method that maintains authentication state on the server side using sessions and tracks authenticated users on the client side via cookies, local storage, or session storage.

## How it works

1. **User Authentication**
   - The user provides valid credentials (e.g., email and password).
   - The server verifies the credentials.

2. **Session Creation**
   - If credentials are valid, the server creates a user session.
   - The session contains user-related data (e.g., user ID, email, etc.) and a unique session ID.
   - The session data can be stored in memory or a database.

3. **Session ID Storage**
   - The session ID is returned to the browser as part of the response.
   - The browser stores the session ID in cookies, local storage, or session storage.

4. **User Logout**
   - The session is destroyed on the server.
   - The session ID is deleted from the browser.

## Response Locals

The `response.locals` property is an object that holds response local variables specific to the current request. It has a limited scope and is accessible only during the request-response cycle.

### Purpose
- Used to send session-related data to the client inside the `response.locals`.
- Available to views rendering during the particular request-response cycle.

## Conclusion
Stateful authentication provides a secure way to manage user sessions, leveraging server-side storage for authentication states. However, it requires careful session management to prevent security risks such as session hijacking and fixation.

## Installation

### Prerequisites

If you do not have Node.js installed, follow these steps:

1. **Download Node.js**
   - Go to [Node.js official website](https://nodejs.org/).
   - Download and install the latest LTS (Long-Term Support) version.

2. **Verify Installation**
   - Open a terminal or command prompt and run:
     ```sh
     node -v
     ```
   - You should see a version number displayed (e.g., `v18.x.x`).

### Setting Up the Project

1. **Clone the repository**
   ```sh
   git clone <https://github.com/eeyll18/session-based-authentication.git>
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the server**
   ```sh
   npm start
   ```