import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github'
// import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { env } from '@/env'
import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@/app/lib/prisma/PrismaAdapter'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth/next'

export function buildNextAuthOptions(): NextAuthOptions {
  return {
    adapter: PrismaAdapter(),

    providers: [
      GitHubProvider({
        clientId: env.GITHUB_CLIENT_ID,
        clientSecret: env.GITHUB_CLIENT_SECRET,
        profile(profile: GithubProfile) {
          return {
            id: String(profile.id),
            name: profile.name!,
            email: profile.email,
            avatar_url: profile.avatar_url,
          }
        },
      }),
      GoogleProvider({
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            name: profile.name,
            username: '',
            email: profile.email,
            avatar_url: profile.picture,
          }
        },
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        allowDangerousEmailAccountLinking: true,
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        return true
      },
      async redirect({ url, baseUrl }) {
        return '/home'
      },
      async session({ session, token, user }) {
        return {
          ...session,
          user,
        }
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        return token
      },
    },
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions())
}
