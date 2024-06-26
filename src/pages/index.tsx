import Head from 'next/head';
import Link from 'next/link';

import FilledButton from '@/components/buttons/FilledButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <FilledButton theme="dark">Button</FilledButton>
        <FilledButton
          theme="dark"
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          asChild
        >
          <Link href="/about">Link</Link>
        </FilledButton>
      </div>
    </>
  );
}
