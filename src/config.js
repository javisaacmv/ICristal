const envConfig = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000";
  } else {
    return "prod";
  }
};

export default envConfig;
