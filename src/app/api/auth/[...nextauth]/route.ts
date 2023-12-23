import NextAuth from 'next-auth'
import { buildNextAuthOptions } from './options'

const handler = NextAuth(buildNextAuthOptions())
export { handler as GET, handler as POST }
