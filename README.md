```gql
query Query {
  hour
  user {
    id
    name
    email
    age
    salary
    vip
  }
  product {
    name
    price
    discount
    priceWithDiscount
  }
  users {
    id
    name
    email
    age
    role {
      role
    }
  }
  userWithParams(id: 1) {
    name
    id
  }
  roles {
    id
    role
  }
  userRole(id: 1) {
    role
  }
}
```

---

```gql
mutation {
  createUser(
    data: {
      name: "Novo"
      email: "novo@exempl76.com"
      age: 25
      salary_brl: 1000
      vip: true
    }
  ) {
    id
    name
    email
    age
    salary
    vip
    role {
      id
      role
    }
  }
}
```

---

```gql
mutation {
  deleteUser(filter: { email: "novo@exempl76.com" })
}
```

---

```gql
mutation {
  updateUser(filter: { id: 5 }, data: { name: "New", email: "hi5" }) {
    id
    name
  }
}
```
