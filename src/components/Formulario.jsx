import React from 'react';

const FormularioRegistro = () => {
  return (
    <div style={styles.container}>
      <h2>Formulario de Registro</h2>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" placeholder="Apellido" />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" placeholder="Contraseña" />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="confirmarPassword">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmarPassword"
            name="confirmarPassword"
            placeholder="Confirmar contraseña"
          />
        </div>
        <button type="submit" style={styles.button}>Registrar</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default FormularioRegistro;