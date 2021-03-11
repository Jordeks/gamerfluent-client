JWT Blog: https://levelup.gitconnected.com/jwt-auth-in-a-react-rails-app-8a7e6ba1ac0
Repos: https://github.com/reireynoso/jwt-backend
Repos: https://github.com/reireynoso/jwt-frontend

How to log out: https://medium.com/devgorilla/how-to-log-out-when-using-jwt-a8c7823e8a6

3/10/21
Meks - Added a logout button, which does log out by removing the token (I think), because if you refresh app crashes because there is no user blogs to get for the post container
  problem, when you login again, the first time it's broken but if you refresh it does work, probably some async issue

ToDo: 
[] login redirects user to their dashboard
[] logout redirects user to home