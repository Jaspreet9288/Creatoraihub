# CreatorAI Hub

CreatorAI Hub is a Next.js, Supabase, and Vercel app for YouTube creators. It
includes authentication, a protected dashboard, and creator workflow cards for:

- AI YouTube Title Generator
- Description Generator
- Tags Generator
- Script Writer
- Thumbnail Prompt Generator
- Viral Hooks Generator
- Channel Growth Tools

## Environment Variables

Set these in Vercel and in `.env.local` for local development:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

Do not expose a Supabase service role key in frontend code.

## Auth Configuration

Supabase Redirect URLs:

```text
https://YOUR-VERCEL-DOMAIN.vercel.app/auth/callback
https://YOUR-VERCEL-DOMAIN.vercel.app/auth/confirm
https://YOUR-VERCEL-DOMAIN.vercel.app/auth/update-password
```

Google Cloud OAuth Authorized redirect URI:

```text
https://YOUR-SUPABASE-PROJECT-REF.supabase.co/auth/v1/callback
```

## Local Development

```bash
npm install
npm run dev
```
