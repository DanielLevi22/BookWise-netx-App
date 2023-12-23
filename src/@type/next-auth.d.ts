import 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    avatar_url: string
  }
  export interface Session {
    user: {
      id: string
      name: string
      email: string
      username: string
      avatar_url: string
    }
  }
}
