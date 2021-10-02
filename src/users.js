import bcrypt from "bcryptjs";
const users = [
  {
    firstname: "Admin",
    lastname: "User",
    email: "admin@example.com",
    dateofbirth: "31/12/1996",
    city: "Kolkata",
    state: "WestBengal",
    password: 123456,
    isAdmin: true,
    id: 1,
  },
  {
    firstname: "John",
    lastname: "Doe",
    email: "John@example.com",
    dateofbirth: "1/1/1970",
    city: "Kolkata",
    state: "WestBengal",
    password: 123456,
    id: 2,
  },
  {
    firstname: "Steve",
    lastname: "Smith",
    email: "steve@example.com",
    dateofbirth: "1/1/1972",
    city: "Kolkata",
    state: "WestBengal",
    password: 123456,
    id: 3,
  },
  {
    firstname: "Test",
    lastname: "Smith",
    email: "Test@example.com",
    dateofbirth: "1/1/1972",
    city: "Kolkata",
    state: "WestBengal",
    password: 123456,
    id:4
  },
];
export default users;