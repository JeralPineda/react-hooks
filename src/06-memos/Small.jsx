import { memo } from 'react';

export const Small = memo(({ value }) => {
  //Permite que no se renderice el componente si no se realiza un cambio en el contador
  console.log('Me volvi a generar');

  return <small>{value}</small>;
});
