const dbConfig = {
  url: process.env.MONGGO_URL,
  database: process.env.MONGGO_DATABASE,
  port: process.env.PORT,
  imgBucket: "photos",
};

export default dbConfig;
