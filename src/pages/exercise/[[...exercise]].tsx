import Footer from '@/components/elements/footer';
import HeaderNav from '@/components/elements/headerNavExer';
import React from 'react'

const Dynamic = () => {
  return (
      <main className="w-full h-full px-8 py-6 flex flex-col gap-8">
          <HeaderNav/>
          <section className="w-full h-full rounded-xl border-2 border-color-c7 p-4"></section>
          <Footer/>
    </main>
  );
}

export default Dynamic