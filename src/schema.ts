const typeDefs = `#graphql
  scalar Date

  type Product {
    name: String!
    price: Float!
    discount: Float
    priceWithDiscount: Float
  }

  type Role {
    id: ID!
    role: String!
  }

  enum Status {
    Active
    Inactive
    Bloqued
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
    role: Role
    status: Status
  }

  input UserInput {
    name: String!
    email: String!
    age: Int
    salary_brl: Float
    vip: Boolean
  }

  input SearchUser {
    id: ID
    email: String
  }

  type Query {
    hour: Date
    user: User
    product: Product
    users: [User]
    userWithParams(id: ID!): User
    roles: [Role]
    userRole(id: ID!): Role
  }

  type Mutation {
    createUser(data: UserInput!): User!

    deleteUser(filter: SearchUser): Boolean!

    updateUser(filter: SearchUser!, data: UserInput!): User
  }

`;

export { typeDefs };
