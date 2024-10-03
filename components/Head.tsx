// @ts-nocheck
import React from 'react';
import Head from 'next/head';

type Props = { title?: string };

const SiteHead = (props: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Dennis Bamfo </title>
        <link rel="icon" type="image/png" href="" />
        <meta
          name="description"
          content="Non-tech bro"
        ></meta>
        {/* <meta property="og:image" content="https://jdc.dev/pfp.png" /> */}
        <meta property="og:title" content="Dennis Bamfo" />
        <meta
          property="og:description"
          content="Non-tech bro"
        />
      </Head>
    </>
  );
};

export default SiteHead;
