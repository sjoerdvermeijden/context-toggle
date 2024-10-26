import Footer from './Footer';
import Header from './Header';

import Movies from './Movies'

export default function Home() {
  return (
    <>
      <Header />
      <div className='py-10'>
        <div className='mx-auto container'>
          <Movies />
        </div>
      </div>
      <Footer />
    </>
  );
}
