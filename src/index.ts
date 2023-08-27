import express, { Request, Response } from "express";

async function main(): Promise<void> {
  const app = express();
  const port = 80;

  app.use(express.json());

  const store = {
    counter: 0,
  };

  app.get("/", (req: Request, res: Response): void => {
    res.send("Hello World!");
  });
  
  app.get("/num", async (req: Request, res: Response): Promise<void> => {
    res.json(store.counter);
  });

  app.get("/count", async (req: Request, res: Response): Promise<void> => {
    store.counter += 1;
    res.json(store.counter);
  });

  app.listen(port, (): void => {
    console.log("API listening on port " + port);
  });
}

main();
