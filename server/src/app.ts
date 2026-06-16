import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

// 404 handler — catches any route not matched above
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Not found' });
});

export default app;
