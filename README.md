# Banking Application

This is a simple banking application that allows users to create an account, log in, deposit money, withdraw money, and view their account balance. The application provides a user-friendly interface for managing financial transactions securely.

## Getting Started

To run the application, you need to have Node.js and MongoDB installed on your system. Follow the steps below to set up and start the application:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/banking-application.git
   cd banking-application
   ```

2. Install dependencies:
   ```
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory of the project and provide the necessary environment variables, such as `MONGO_URI`, `JWT_SECRET`, etc.

4. Build the application:
   ```
   yarn build
   ```

5. Start the application:
   ```
   yarn start
   ```

   The client application will run on `http://localhost:3000`.

## Usage

### Create an Account

- Go to the registration page by clicking on "Sign Up" in the navigation bar.
- Enter your email address and password.
- Click on "Create Account" to create your account.
- A success message will be displayed upon successful account creation.

### Log In

- Click on "Log In" in the navigation bar.
- Enter your email address and password.
- Click on "Log In" to access your account.

### Log Out

- When logged in, your email address or username will appear at the top right corner of the page.
- Click on the Log In item in navigation bar and select "Log Out" to log out of your account.

### Deposit Money

- After logging in, you will see your other props in navigation bar.
- Click on "Deposit" and enter the amount you want to deposit.
- The balance will update according to the deposit, and the information will persist across logins.

### Withdraw Money

- After logging in, you will see your other props in navigation bar.
- Click on "Withdraw" and enter the amount you want to withdraw.
- The balance will update according to the withdrawal, and the information will persist across logins.

## Bonus Developped

- Implement transaction history to view past deposits and withdrawals.
- Improve security measures and error handling.
- Develop Access Layout for the frontend as well.
- Hash of the password, and security check
- In progress -> Add checking and savings accounts

## Technologies Used

- Frontend: React, Next.js
- Backend: Next.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)

## Future Improvements

- Add multi-currency support.
- Enable users to update their profile information.

Feel free to contribute to the project or suggest any improvements. Happy banking!
