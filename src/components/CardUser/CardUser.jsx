import "./CardUser.css";

function CardUser({ user }) {
  return (
    <div className='CardUserContainer'>
      <h3>Nombre: {user.name}</h3>
      <h4>Apellido: {user.lastName}</h4>
      <p>Edad: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default CardUser;
