import axios from "axios";

/**
 * Petición HTTP para el GET
 * @param ruta endpoint del back a utilizar
 * @returns response.data
 *
 * Ejemplo de uso:
 *
 * useEffect(() => {
 *     get("tipoCarpeta/")
 *       .then((res) => {
 *         setCarpetas(
 *           (res as TipoCarpeta[]).map(
 *             (tipoCarpeta) => tipoCarpeta.descTipoCarpeta
 *           )
 *         );
 *       })
 *       .catch((reason) => {
 *         console.error(reason);
 *       });
 *   }, []);
 */
const get = async (ruta: string) => {
  try {
    const res = await axios.get(`/api${ruta}`);

    if (res.status === 200) {
      return res.data;
    } else {
      console.error(res);
      return null;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const post = async (ruta: string, body: any) => {
  try {
    const res = await axios.post(`/api${ruta}`, body);

    if (res.status === 202) {
      return res.data;
    } else {
      console.error(res);
      return null;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { get, post };
