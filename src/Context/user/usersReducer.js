import {
  INICIAR_SESION_ERROR,
  INICIAR_SESION_EXITO,
  USUARIO_AUTENTICADO,
  CERRAR_SESION,
  CARGANDO,
} from "../../types/index";
export default (state, action) => {
  switch (action.type) {
    case CARGANDO:
      return { ...state, cargando: true };
    case INICIAR_SESION_EXITO:
    case USUARIO_AUTENTICADO:
      return {
        ...state,
        user: action.payload,
        autenticado: true,
        cargando: false,
      };
    case INICIAR_SESION_ERROR:
      return { ...state, cargando: false };
    case CERRAR_SESION:
      return { user: null, autenticado: false, cargando: false };
    default:
      return state;
  }
};
