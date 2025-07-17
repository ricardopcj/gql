interface Role {
  id: number;
  role: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  salary_brl?: number;
  vip?: boolean;
  roleId: number;
}

type CreateUserInput = Omit<User, "id" | "roleId">;

type SearchUser = Pick<User, "id" | "email">;

interface Product {
  name: string;
  price: number;
  discount?: number;
}

export { Role, User, CreateUserInput, Product, SearchUser };
