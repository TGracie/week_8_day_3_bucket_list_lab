use bucket_list;
db.dropDatabase();

db.list.insertMany([
  {
    name: "Bungee Jumping",
    timeframe: 5,
    category: "Extreme Sports",
    status: false
  },
  {
    name: "Skydiving",
    timeframe: 3,
    category: "Extreme Sports",
    status: false
  },
  {
    name: "Play Guitar",
    timeframe: 15,
    category: "Music",
    status: false
  }
]);
