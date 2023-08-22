import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express(); // express application instance

console.log(process.argv); // argument variables

if (!process.env.HOST) {
  console.log("Missing HOST variable");
  process.exit();
}

if (!process.env.PORT) {
  console.log("Missing PORT variable");
  process.exit();
}

console.log("Application running! All variables are found");

// return the room temperature
app.get("/temperature", (request, response) => {
  // database call
  // call another API
  // read from a file
  const temperature = 20; // simulate room temperature

  response.send({ temperature: temperature });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT} 🐒`);
});
