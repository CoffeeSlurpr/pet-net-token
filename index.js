import express from "express";
import axios from "axios";
import cors from "cors";
import {} from "dotenv/config";

const app = express();
const port = process.env.PORT;
const key = process.env.KEY;
const secret = process.env.SECRET;

app.use(cors());

app.get("/fetchToken", async (req, res) => {
  const token = await axios.post("https://api.petfinder.com/v2/oauth2/token", {
    grant_type: "client_credentials",
    client_id: key,
    client_secret: secret,
  });

  res.send(token.data);
  console.log(token.data);
  console.log("token sent at", new Date());
});

app.listen(port, (error) => {
  if (error) console.log(error);
  else console.log("Live on port " + port);
});
