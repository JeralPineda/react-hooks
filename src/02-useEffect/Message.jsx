import { useEffect, useState } from 'react';

export const Message = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 });

  // useEffect con callback de limpieza
  // Ejemplo típico al montar componente, cuando se muestra o se destruye
  useEffect(() => {
    // Referencia para limpiar
    const onMouseMove = ({ x, y }) => {
      setCords({ x, y });
    };

    //Evento para escuchar el movimiento del mouse, listener
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      //Removiendo el listener
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(cords)}
    </>
  );
};
