import { Router, Request, Response } from "express";

const router = Router();

router.get("/mensajes", (req: Request, res: Response) => {
  res.status(201).json({ msg: "Working" });
});

router.post("/mensajes", (req: Request, res: Response) => {
  const { cuerpo, de } = req.body;
  res.status(201).json({ cuerpo, de });
});

export default router;
