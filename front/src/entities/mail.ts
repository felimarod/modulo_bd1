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
  remitentesCO: string,
  asunto: string,
  fecha: string,
  remitentesCCO?: string,
  cuerpoMensaje?: string
): Mensaje {
  dayjs.extend(customParseFormat);
  return {
    id,
    remitentesCO,
    asunto,
    fecha: dayjs(fecha, "DD/MM/YYYY HH:mm").format("HH:mm DD-MM-YYYY"),
    remitentesCCO,
    cuerpoMensaje,
  };
}

export { crearMensaje };
export type { Mensaje };
