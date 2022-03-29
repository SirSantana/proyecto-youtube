import DBConnect from "../../../libs/dbConnect";
import HistoriaModel from "../../../models/HistoriaModel";

export default async function handler(req, res) {
  await DBConnect();
  const {
    method,
    query: { id },
  } = req;
  switch (method) {
    case "PUT":
      try {
        const quest = await HistoriaModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!quest)
          return res
            .status(403)
            .json({ succes: false, error: "No se ha encontrado" });
        return res.status(200).json({ success: true, data: quest });
      } catch (error) {
        return res
          .status(403)
          .json({ succes: false, error: "No se ha encontrado" });
      }

    case "GET":
      try {
        const Quest = await HistoriaModel.findById(id).lean();
        if (!Quest)
          return res
            .status(403)
            .json({ success: false, error: "No existe la quest" });
        return res.status(200).json({ success: true, data: Quest });
      } catch (error) {
        res.status(403).json({ error: "Ha ocurrido un error" });
      }

    default:
      res.status(403).json({ error: "Ha ocurrido un error" });
  }
}
