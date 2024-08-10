// server.js
const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const db = router.db;
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/feedback", async (req, res) => {
  // email should be unique

  const feedback = req.body;
  const email = feedback.userEmail;

  console.log(req.body);

  const dbState = await db.getState();
  const existingFeedback = dbState.feedback.find(
    (feedback) => feedback.userEmail === email
  );
  if (existingFeedback) {
    res.status(400).send({ errorMessage: "Email already exists" });
    return;
  }

  dbState.feedback.push(feedback);
  await db.setState(dbState);
  await db.write();
  res.sendStatus(200);
});

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
