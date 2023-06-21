import env from "dotenv";
import app from "./app";

env.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
