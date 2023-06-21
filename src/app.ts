import express from "express";
import carRoutes from "./routes/carRoutes";
import calculateQuote from "./routes/carQuoteRoutes";

const app = express();
app.use(express.json());

app.use("/", carRoutes);
app.use("/", calculateQuote);

// const PORT = process.env.PORT;
// const server: Server = app.listen(PORT, () => {
//   console.log(`Server started on ${PORT}`);
// });

export default app;
