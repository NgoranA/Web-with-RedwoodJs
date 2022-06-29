import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  post: Post
}

const Article = ({ post }: Props) => {
  return (
    <article key={post.id}>
      <header>
        <h2>
          <Link to={routes.article({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <p>{post.body}</p>
      <div>Posted at: {post.createdAt}</div>
    </article>
  )
}

export default Article
