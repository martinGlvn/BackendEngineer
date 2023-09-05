// Enums =>

const enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}
function mostrarMensaje(tipoDeError: ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log();
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log();
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log();
  }
}
