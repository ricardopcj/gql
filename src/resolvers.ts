import { role, users, nextId } from "./db.js";
import { User, Product, Role, CreateUserInput, SearchUser } from "./types.js";

function index(filter: SearchUser) {
  if (!filter) return -1;
  const { id, email } = filter;
  if (id) return users.findIndex((u) => u.id == id);
  else if (email) return users.findIndex((u) => u.email == email);
  else return -1;
}

const resolvers = {
  User: {
    salary(user: User) {
      return user.salary_brl;
    },

    role(user: User) {
      return role.find((r) => r.id == user.roleId) || null;
    },
  },

  Product: {
    priceWithDiscount(product: Product) {
      return product.price * (1 - (product.discount || 0));
    },
  },

  Query: {
    hour() {
      return new Date();
    },

    user(): User {
      return {
        id: 1,
        name: "Ricardo",
        email: "ricardo@teste.com",
        age: 29,
        salary_brl: 10000,
        vip: true,
        roleId: 1,
      };
    },

    product(): Product {
      return {
        name: "Test",
        price: 100,
        discount: 0.1,
      };
    },

    users(): User[] {
      return users;
    },

    userWithParams(_: unknown, args: { id: number }): User | null {
      return users.find((u) => u.id == args.id) || null;
    },

    roles(): Role[] {
      return role;
    },

    userRole(_: unknown, args: { id: number }): Role | null {
      return role.find((r) => r.id == args.id) || null;
    },
  },

  Mutation: {
    createUser(_: unknown, { data }: { data: CreateUserInput }): User {
      const emailAlreadyExists = users.some((u) => u.email === data.email);

      if (emailAlreadyExists) throw new Error("Email already exists.");

      const newUser: User = {
        id: nextId(),
        ...data,
        roleId: 1,
      };

      users.push(newUser);
      return newUser;
    },

    updateUser(
      _: unknown,
      { filter, data }: { filter: SearchUser; data: CreateUserInput }
    ) {
      const i = index(filter);
      if (i < 0) return null;
      const user = {
        ...users[i],
        ...data,
      };

      users.splice(i, 1, user);
      return user;
    },

    deleteUser(_: unknown, { filter }: { filter: SearchUser }): boolean {
      const i = index(filter);
      if (i === -1) return false;
      users.splice(i, 1);
      return true;
    },
  },
};

export { resolvers };
