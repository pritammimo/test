import bcrypt from "bcryptjs";
const users = [
  {
    firstname: "Admin",
    lastname: "User",
    email: "admin@example.com",
    dateofbirth: "31/12/1996",
    city: "Kolkata",
    state: "WestBengal",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    firstname: "John",
    lastname: "Doe",
    email: "John@example.com",
    dateofbirth: "1/1/1970",
    city: "Kolkata",
    state: "WestBengal",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    firstname: "Steve",
    lastname: "Smith",
    email: "steve@example.com",
    dateofbirth: "1/1/1972",
    city: "Kolkata",
    state: "WestBengal",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
