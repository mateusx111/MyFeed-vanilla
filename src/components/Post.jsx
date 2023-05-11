import styles from './Post.module.css'
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        {/*Criando divs para facilitar a construção do cogigo */}
        <div className={styles.author}>
          {' '}
          {/*div do autor*/}
          <img src="https://avatars.githubusercontent.com/u/67610170?v=4" />
          <div className={styles.authorInfo}>
            {' '}
            {/*div de informações do autor*/}
            <strong>Mateus Souza</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2023-05-11 10:30:23">Publicado há 1h</time>
      </header>
    </article>
  )
}
