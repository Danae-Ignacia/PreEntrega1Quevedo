export default function BotonComponente({ nombre, background, color }) {
  const misEstilos = {
    backgroundColor: background,
    color: color,
  };

  const handleClick = () => {
    console.log(`Estas en la seccion de ${nombre}`);
  };

  return (
    <button onClick={handleClick} style={misEstilos}>
      {nombre}
    </button>
  );
}
