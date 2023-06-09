/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import BarraDeBusqueda from '../components/ventas/barraDeBusqueda/barraDeBusqueda';
import VistaDeVehiculos from '../components/ventas/panelVehiculos/panelDeVehiculos';
import PanelDeFiltros from '../components/ventas/filtros/panelDeFiltros';
import { products } from '../components/cotizar/products';
import List from '../components/ventas/Lista';
import autosEnVenta from '../constants/autosEnVenta';
import './styles.css';
import VistaVacia from '../components/common/vistaVacia/vistaVacia';

const FiltroDeVehiculos = () => {
  // hooks para guardar los estados
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000000, 30000000]);
  const [selectedKM, setSelectedKM] = useState([2000, 8000]);
  const [list, setList] = useState(products);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  // handles
  /*
  const handleCategoriaSeleccionada = (event, value) => (
    !value ? null : setCategoriaSeleccionada(value));
  const handleChangePrice = (event, value) => setSelectedPrice(value);
  const handleChangeKM = (event, value) => setSelectedKM(value);

  // funcion principal encargada de gestionar los filtros
  const aplicarFiltros = () => {
    let updatedList = autosEnVenta;
    // filtra por combustible
    if (categoriaSeleccionada) {
      updatedList = updatedList.filter((item) => item.combustible === categoriaSeleccionada);
    }

    // filtro de barra de busqueda
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) => item.marca.toLowerCase().search(searchInput.toLowerCase().trim())
          !== -1,
      );
    }

    // filtra con el slider por el precio
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.precio >= minPrice && item.price <= maxPrice,
    );

    setList(updatedList);
    console.log(updatedList);
    console.log(minPrice);
    console.log(categoriaSeleccionada);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  // es otro hook que se ejecuta despues de que renderiza en el dom
  useEffect(() => {
    aplicarFiltros();
  }, [categoriaSeleccionada, selectedPrice, searchInput]);
*/
  return (
    <div className="filtroDeVehiculos">
      {/* Barra de busqueda - busca x marca o modelo del auto .. me habia olvidado de este input */}
      <BarraDeBusqueda value={searchInput} changeImput={(e) => setSearchInput(e.target.value)} />

      <div className="filtroDeVehiculos_panelist-wrap">
        <div className="filtroDeVehiculos_panel-wrap">
          {/* Panel de filtros - aca se visualizan los posibles filtros */}
          <PanelDeFiltros
            // toggleSeleccionado={handleCategoriaSeleccionada}
            categoriaSeleccionada={categoriaSeleccionada}
            selectedPrice={selectedPrice}
            // changedPrice={handleChangePrice}
            selectedKM={selectedKM}
            // changedKM={handleChangeKM}
          />
        </div>
        <div className="filtroDeVehiculos_list-wrap">
          {/* vista del listado de autos - si no encuentra nada, pone un gif */}
          {resultsFound ? <List list={list} /> : <VistaVacia />}
        </div>
      </div>
    </div>
  );
};
export default FiltroDeVehiculos;
