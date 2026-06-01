import 'dotenv/config'
import pkg from 'pg'
const { Client } = pkg

const client = new Client({ connectionString: process.env.DATABASE_URL })

try {
  await client.connect()
  await client.query('DROP TABLE IF EXISTS "public"."Review" CASCADE')
  await client.query(`CREATE TABLE "public"."Review" (
    "id" text PRIMARY KEY,
    "name" text NOT NULL,
    "role" text NOT NULL,
    "practice" text NOT NULL,
    "location" text NOT NULL,
    "rating" integer NOT NULL,
    "reviewText" text NOT NULL,
    "approved" boolean NOT NULL DEFAULT false,
    "createdAt" timestamptz NOT NULL DEFAULT now()
  )`)
  const res = await client.query("SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='Review' ORDER BY ordinal_position")
  console.log('columns:', res.rows.map(r=>r.column_name))
} catch (e) {
  console.error('error', e)
  process.exit(1)
} finally {
  await client.end()
}
