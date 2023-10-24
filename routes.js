const ROUTES = [
  {
    url: "/products",
    auth: false,
    creditCheck: false,
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5,
    },
    proxy: {
      target: "http://localhost:3000",
      changeOrigin: true,
    },
  },
  {
    url: "/register",
    auth: false,
    creditCheck: false,
    proxy: {
      target: "http://localhost:3002",
      changeOrigin: true,
    },
  },
];

exports.ROUTES = ROUTES;
