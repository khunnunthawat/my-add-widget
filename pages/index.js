import Head from 'next/head';
import WidgetContent from '../components/WidgetContent';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <WidgetContent />
    </div>
  );
}
