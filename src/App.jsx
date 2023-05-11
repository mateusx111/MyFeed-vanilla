import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Mateus Souza"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, qui, quae maxime accusamus magnam quas nam iure delectus possimus reprehenderit adipisci maiores, quod placeat atque explicabo! Autem iure fugit explicabo?"
          />
          <Post
            author="Poliana Santana"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque libero ratione soluta ipsum, est doloribus quod qui repudiandae tempora velit quis laborum eos obcaecati porro cupiditate consequuntur. Ipsum, tempore."
          />
        </main>
      </div>
    </>
  )
}

export default App
