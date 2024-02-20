import "./Saludo.css";

function Saludo({ nombre, apellido }) {
  return (
    <div className='SaludarContainer'>
      <h3>Nombre: {nombre}</h3>
      <h4>Apellido: {apellido}</h4>
    </div>
  );
}

export default Saludo;
