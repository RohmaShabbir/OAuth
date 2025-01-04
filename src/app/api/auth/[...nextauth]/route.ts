import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from "next-auth/providers/github"

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
    throw new Error("Missing GITHUB_ID or GITHUB_SECRET in environment variables");
  }

const handler = NextAuth({
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
 
  ]
})

export {handler as GET, handler as POST}