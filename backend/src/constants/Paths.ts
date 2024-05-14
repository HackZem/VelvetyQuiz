export default {
  Base: "/api",
  Users: {
    Base: "/users",
    GetMe: "/me",
    Update: "/:id",
    Delete: "/:id",
    Auth: {
      Login: "/auth/login",
      Register: "/auth/register",
      Logout: "/auth/logout",
      Activate: "/auth/activate/:link",
      Refresh: "/auth/refresh",
    },
  },
  Tests: {
    Base: "/tests",
    GetAll: "/",
    GetOne: "/:id",
    Create: "/",
    Remove: "/:id",
    Edit: "/:id",
  },
  Sessions: {
    Base: "/sessions",
    Create: "/",
    Remove: "/:id",
    Edit: "/:id",
  },
} as const;
