import dayjs from "dayjs";

interface Data {
  id: number;
  remitente: string;
  asunto: string;
  fecha: string;
}

function createData(
  id: number,
  remitente: string,
  asunto: string,
  fecha: Date
): Data {
  return {
    id,
    remitente,
    asunto,
    fecha: dayjs(fecha.toISOString()).format("MM/DD/YYYY h:mm A"),
  };
}

export { createData };
export type { Data };

