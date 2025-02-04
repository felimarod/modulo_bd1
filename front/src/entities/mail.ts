import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

type Mensaje = {
  id: string;
  asunto: string;
  cuerpoMensaje?: string;
  fecha: string;
  remitentesCO: string;
  remitentesCCO?: string;
};

function crearMensaje(
  id: string,
  remitentes: string,
  asunto: string,
  fecha: string,
  remitentesCCO?: string,
  cuerpoMensaje?: string
): Mensaje {
  dayjs.extend(customParseFormat);
  return {
    id,
    remitentesCO: remitentes,
    asunto,
    fecha: dayjs(fecha, "DD/MM/YYYY HH:mm").format("YYYY-MM-DD HH:mm"),
    cuerpoMensaje,
    remitentesCCO,
  };
}

export { crearMensaje };
export type { Mensaje };
