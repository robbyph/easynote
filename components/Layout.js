import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <div>
        <div className='mt-4'>
          <Header></Header>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
