import Footer from './Footer';
import Header from './Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className='py-10'>
        <div className='mx-auto container'>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
