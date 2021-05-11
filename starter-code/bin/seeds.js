const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const MONGODB_URI = "mongodb+srv://public-user:admin2021@cluster0.jcdmn.mongodb.net/lab-mongoose-movies?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("ok");
})
.catch((err) => console.log(err));

const celebrities = [
  {
    name: "Sonic",
    occupation: "hero",
    catchPhrase: "ça pique !",
  },
  {
    name: "Dwayne Johnson",
    occupation: "hero",
    catchPhrase: "ça casse la baraque !",
  },
  {
    name: "Celine Dion",
    occupation: "chanteuse",
    catchPhrase: "ça casse les oreilles !",
  },
];

Celebrity.create(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);

    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(
      `An error occurred while creating celebrities from the DB: ${err}`
    )
  );
