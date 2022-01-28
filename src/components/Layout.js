import React from 'react';
import Header from './Header';

function Layout({ title, children }) {
  return (
    <div className='app'>
        <title>{ title }</title>
        <Header />
        <main className='content'>
            <div className='content__wrapper'>
                { children }
            </div>
        </main>
    </div>
  );
}

export default Layout;
