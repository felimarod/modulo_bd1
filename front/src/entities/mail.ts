import dayjs from "dayjs";

interface Mensaje {
  id: number;
  asunto: string;
  cuerpoMensaje?: string;
  fecha: string;
  remitentes: string;
}

function createData(
  id: number,
  remitentes: string,
  asunto: string,
  fecha: Date,
  cuerpoMensaje?: string
): Mensaje {
  return {
    id,
    remitentes: remitentes,
    asunto,
    fecha: dayjs(fecha.toISOString()).format("MM/DD/YYYY h:mm A"),
    cuerpoMensaje,
  };
}

export { createData };
export type { Mensaje };
