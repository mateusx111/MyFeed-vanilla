import { PencilSimple } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50tps://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        />

        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/67610170?v=4"
            alt="foto perfil"
          />
          <strong>Mateus Souza</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilSimple size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  )
}
