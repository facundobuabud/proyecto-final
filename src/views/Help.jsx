import { Link } from "react-router-dom"
import styles from "../help.module.css";

export default function Help() {
  return (
    <main className={styles.helpMain}>
      <h1 className={styles.helpTitle}>Ayuda</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Funcionamiento general del chat</h2>
        <p className={styles.text}>
          Este proyecto es un clon de WhatsApp diseñado para simular el funcionamiento básico de una aplicación de mensajería.
          Permite enviar mensajes a usuarios simulados, mostrar las conversaciones en tiempo real dentro de una interfaz similar a la original,
          y mantener el historial del chat almacenado localmente para que los mensajes no se pierdan al recargar la página.
          El diseño busca imitar la estructura y estilo de WhatsApp Web, incluyendo la lista de contactos, el área de conversación y los estados visuales de envío de mensajes.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tecnologías utilizadas</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>React:</strong> librería principal utilizada para construir los componentes dinámicos de la aplicación y manejar el estado del chat.
          </li>
          <li className={styles.listItem}>
            <strong>HTML:</strong> estructura base de la aplicación.
          </li>
          <li className={styles.listItem}>
            <strong>CSS:</strong> estilos y diseño visual, incluyendo la disposición de los chats, colores y animaciones.
          </li>
          <li className={styles.listItem}>
            <strong>JavaScript:</strong> lógica de funcionamiento, envío de mensajes y actualización de la interfaz.
          </li>
          <li className={styles.listItem}>
            <strong>LocalStorage:</strong> almacenamiento local del navegador utilizado para guardar el historial de mensajes y mantener la información al recargar la página.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Posibles mejoras</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Incorporar envío de archivos, imágenes y audios.</li>
          <li className={styles.listItem}>Funcionalidad de temas personalizables (modo oscuro, cambio de idioma, etc.).</li>
          <li className={styles.listItem}>Implementar notificaciones de escritorio y estado en línea/en escritura.</li>
          <li className={styles.listItem}>Recepción de mensajes en tiempo real.</li>
        </ul>
      </section>

      <p className={styles.textInfo}>
        <Link to="/chat" className={styles.link}>Volver</Link>
      </p>
    </main>
  );
}

