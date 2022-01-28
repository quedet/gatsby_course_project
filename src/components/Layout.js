import React from 'react';
import Header from './Header';

function Layout({ title, children }) {
  return (
    <>
        <title>{ title }</title>
        <Header />
        <main className='content'>
            <div className='content__wrapper'>
                { children }
            </div>
        </main>
    </>
  );
}

export default Layout;
