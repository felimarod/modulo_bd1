import { AccionMensaje } from "./AccionMensaje";
import { MensajeDTO } from "./DTO/MailDTO";

interface InfoMensajeLS {
  infoMensaje: MensajeDTO;
  accion: AccionMensaje;
}

export type { InfoMensajeLS };
