import HttpService from '../../../http-service';

const ComisionService = {
  obtenerComisiones: () => HttpService.get('/comisiones/'),
  modificarComision: (idComision, datosComision) => HttpService.put(`/comision/${idComision}/`, datosComision),
};

export default ComisionService;
