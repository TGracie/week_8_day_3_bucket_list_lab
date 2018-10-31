use bucket_list;
db.dropDatabase();

db.list.insertMany([
  {
    name: "Bungee Jumping",
    timeframe: 5,
    category: "Extreme Sports"
  },
  {
    name: "Skydiving",
    timeframe: 3,
    category: "Extreme Sports"
  },
  {
    name: "Play Guitar",
    timeframe: 15,
    category: "Music"
  }
]);
