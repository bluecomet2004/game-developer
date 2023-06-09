import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

export default function Homepage(props: React.FC<PageProps>)  {
  return (
    <main>
      <h1>Hi</h1>
    </main>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>
