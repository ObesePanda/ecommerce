import { useAuth } from "@/hooks";
export default function Index() {
  const { user, logout } = useAuth();

  console.log(user);
  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>
      <button href="/join/sign-in" className="button-primary">
        Iniciar sesión{" "}
      </button>
      {user ? (
        <div>
          <p>
            Sesion Iniciada: {user.username} ( {user.first_name}
            {user.last_name} )
          </p>
          <button onClick={logout} className="button-secondary">
            Cerrar sesión
          </button>
        </div>
      ) : (
        <div>
          <a href="/join/sign-in">Inciar sesión</a>
        </div>
      )}
    </div>
  );
}
