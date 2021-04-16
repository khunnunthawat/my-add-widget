import Head from 'next/head';
import CardNone from '../components/Layouts/CardNone';
import WidgetContent from '../components/WidgetContent';
export default function Home() {
  return (
    <>
      <Head>
        <title>Widget - Daytech Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <WidgetContent />
      <CardNone />
    </>
  );
}
