export default {
  Base: "/api",
  Users: {
    Base: "/users",
    GetMe: "/:id",
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
    Add: "/",
    Remove: "/:id",
    Edit: "/:id",
  },
} as const;
