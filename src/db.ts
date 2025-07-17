const role = [
  { id: 1, role: "admin" },
  { id: 2, role: "user" },
];

let id = 1;

function nextId() {
  return id++;
}

const users = [
  {
    id: nextId(),
    name: "Thais",
    email: "hi",
    age: 10,
    roleId: 1,
  },
  {
    id: nextId(),
    name: "Carla",
    email: "hi2",
    age: 10,
    roleId: 2,
  },
  {
    id: nextId(),
    name: "Cris",
    email: "hi3",
    age: 10,
    roleId: 2,
  },
];

export { role, users, nextId };
