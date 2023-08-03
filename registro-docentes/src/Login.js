import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Login = () => {
  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // El inicio de sesión fue exitoso, puedes redirigir al usuario a la siguiente página
        console.log('Inicio de sesión exitoso:', result.user);
      })
      .catch((error) => {
        // Hubo un error en el inicio de sesión
        console.error('Error en el inicio de sesión:', error);
      });
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <button onClick={handleLogin}>Iniciar sesión con Gmail</button>
    </div>
  );
};

export default Login;
