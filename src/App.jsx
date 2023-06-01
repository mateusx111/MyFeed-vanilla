import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Spacetime, evento da Rocketseat. O nome do projeto Capsula do tempo 🚀',
      },
      { type: 'link', content: 'jane.design/Timelapse' },
    ],
    publishedAt: new Date('2023-05-29 16:56: 45'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Nesse curso você vai aprender os fundamentos da programação web através da metodologia da Rocketseat: na prática e direto ao ponto.E em questão de dias, no máximo semanas, com o que vamos te ensinar aqui, VOCÊ vai sair do zero e criar seu primeiro projeto na área! Esperamos muito que você goste do conteúdo e se dedique para chegar até o final.Ah, e se quiser saber mais sobre o Explorer, o programa completo de formação citado no vídeo, clique aqui. 🚀',
      },
      { type: 'link', content: 'Mayk.Dev/Discover' },
    ],
    publishedAt: new Date('2023-05-18 6:56:45'),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
