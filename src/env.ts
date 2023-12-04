import { z } from 'zod'

const envSchema = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment	variable',
    parsedEnv.error.flatten().fieldErrors,
  )
  throw new Error('Invalid environment variable')
}

export const env = parsedEnv.data
