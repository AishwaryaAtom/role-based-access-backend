API ROUTES FOR replace local host with https://role-based-access-backend-2.onrender.com
#Login
http://localhost:5000/api/auth/login

#Register
http://localhost:5000/api/auth/register

#CRUD USER

GET-http://localhost:5000/api/users/users

PUT-http://localhost:5000/api/users/:id/role

DELETE:http://localhost:5000/api/users/:id

#CRUD REPORT

GET-POST-http://localhost:5000/api/reports

PUT-http://localhost:5000/api/reports/:id

DELETE-http://localhost:5000/api/reports/:id

#GET PROFILE
GET-http://localhost:5000/api/auth/me
