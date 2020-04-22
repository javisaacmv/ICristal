const envConfig = () => {
  if (process.env.NODE_ENV === "development") {
    return "localhost:4000";
  } else {
    return "prod";
  }
};

export default envConfig;
