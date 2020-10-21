import { OBTENER_TEMAS, IMAGEN_SUBIDA } from "../../types/index";
export default (state, action) => {
  switch (action.type) {
    case OBTENER_TEMAS:
      return { ...state, temas: [action.payload] };
    case IMAGEN_SUBIDA:
      return { ...state, urlImagen: action.payload.urlDescarga };
    default:
      return state;
  }
};
