import dayjs from "dayjs";

interface Mensaje {
  id: number;
  asunto: string;
  cuerpoMensaje?: string;
  fecha: string;
  remitentesCO: string;
  remitentesCCO?: string;
}

function createData(
  id: number,
  remitentes: string,
  asunto: string,
  fecha: Date,
  remitentesCCO?: string,
  cuerpoMensaje?: string
): Mensaje {
  return {
    id,
    remitentesCO: remitentes,
    asunto,
    fecha: dayjs(fecha.toISOString()).format("MM/DD/YYYY h:mm A"),
    cuerpoMensaje,
    remitentesCCO,
  };
}

export { createData };
export type { Mensaje };
