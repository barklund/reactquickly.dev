export default function Index() {
  return (
    <>
      <header className="py-16 md:py-24 flex justify-center" style={{background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container flex flex-col justify-center md:flex-row md:mx-16 md:w-3/4 md:mx-auto">
          <div className="">
            <h2 className="text-5xl italic md:text-6xl font-bold mb-2 text-white mx-4 md:md-0">
              React Quickly, Second Edition
            </h2>
            <h3 className="text-2xl m-4 text-white md:md-0">
              Are you ready to take your React knowledge to the next level?
            </h3>
            <p className="mb-8 text-white mx-4 mr-8 md:md-0">
              <em>React Quickly, Second Edition</em> is a brand new book on modern React web development and it is available for pre-order and early access now. The new edition has been completely rewritten and fully updated to the React ecosystem as of 2022.
            </p>
            <p className="mt-16 mx-4 md:md-0">
              <a
                href="//barklund.dev/book"
                className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                Buy now
              </a>
            </p>
          </div>
          <div className="w-3/4 md:w-1/3 md:shrink-0 mt-8 md:mt-0 mx-auto md:mx-0">
            <img src="/images/book.png" alt="Book cover" />
          </div>
        </div>
      </header>
      <main className="pt-12">
        <section className="container mx-auto p-10 px-6 w-full md:w-1/2">
          <div className="flex items-center flex-col md:flex-row-reverse mb-20 gap-4 md:gap-12">
            <div className="w-full md:w-1/2">
              <img src="/images/indepth-icon.png" className="w-1/3 md:w-1/2 mx-auto" alt="In-depth" />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">In-depth</h4>
              <p className="text-gray-600 mb-8"><em>React Quickly, Second Edition</em> covers everything you need to know about in modern React development on over 500 pages. The content ranges from component architecture over React hooks to the rich ecosystem of related technologies necessary to create complex web applications.</p>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row mb-20 gap-4 md:gap-12">
            <div className="w-full md:w-1/2">
              <img src="/images/beginner-icon.png" className="w-1/3 md:w-1/2 mx-auto" alt="Beginner" />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">From beginner to advanced</h4>
              <p className="text-gray-600 mb-8">The book contains topics relevant for all developers, where you've been using React for years or have never touched it all. The clear introduction to every chapter will guide you as to whether the chapter is relevant for you or if you can move on. But you might be surprised, there are basic things about React, that even long time developers aren't aware of.</p>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row-reverse mb-20 gap-4 md:gap-12">
            <div className="w-full md:w-1/2">
              <img src="/images/examples-icon.png" className="w-1/3 md:w-1/2 mx-auto" alt="Example" />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">100+ useful examples</h4>
              <p className="text-gray-600 mb-8">The book has 100+ useful examples of small widgets and structures, that you can copy-paste into your applications. All the examples have a real-world purpose and solves an actual problem that you can relate to.</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Testimonials
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">For sure, it'll be a great book to learn how <em>"React thinks"</em> and some modern web dev tips.</p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">Beto Muniz</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">Yes. Yes. A thousand times yes.</p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">Mike Crantea</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">I'm learnding.</p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">Nikki Strømsnes</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{backgroundColor: '#667eea'}}>
          <div className="container mx-auto px-6 text-center py-20">
            <h2 className="mb-6 text-4xl font-bold text-center text-white">
              Available now
            </h2>
            <h3 className="my-4 text-2xl text-white">
              Get the digital copy available in Manning Early Access Program now and help shape the content.
            </h3>
            <p className="mt-16">
              <a
                href="//barklund.dev/book"
                className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
              >
                Buy now
              </a>
            </p>
          </div>
        </section>
        <section className="container mx-auto p-16 px-6 w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About the authors
          </h2>
          <div className="my-24 flex justify-center items-center flex-col md:flex-row-reverse mb-20 gap-8 md:gap-12">
            <div className="w-1/2 md:w-1/4 rounded-full overflow-hidden">
              <img src="/images/barklund.jpeg" alt="Morten Barklund" />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-2xl text-gray-800 font-bold mb-3">Morten Barklund</h4>
              <p className="text-gray-600 mb-8"><strong>Morten Barklund</strong> is an independent software developer working as a lead developer in various teams, including an open-source React project funded by Google. Morten studied Computer Science at the Technical University of Denmark and has worked on hundreds of projects during over 20 years as a web developer.</p>
            </div>
          </div>

          <div className="my-24 flex justify-center items-center flex-col md:flex-row mb-20 gap-8 md:gap-12">
            <div className="w-1/2 md:w-1/4 rounded-full overflow-hidden">
              <img src="/images/mardan.jpeg" alt="Azat Mardan" />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-2xl text-gray-800 font-bold mb-3">Azat Mardan</h4>
              <p className="text-gray-600 mb-8"><strong>Azat Mardan</strong> is a software engineer leader and a university professor with extensive experience using and teaching JavaScript and Node. He’s the author of several books on JavaScript, Node, React, and Express, including the first edition of React Quickly.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100">
        <div className="container mx-auto px-6 pt-10 pb-6">
          <div className="flex flex-col md:flex-row  gap-4">
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">Links</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="//barklund.dev/book" className="hover:underline text-gray-600 hover:text-orange-500">Purchase</a>
                </li>
                <li className="mt-2">
                  <a href="https://livebook.manning.com/book/react-quickly-second-edition/welcome/v-1/9" className="hover:underline text-gray-600 hover:text-orange-500">Book forum</a>
                </li>
                <li className="mt-2">
                  <a href="https://github.com/rq2e/rq2e" className="hover:underline text-gray-600 hover:text-orange-500">Source code</a>
                </li>
              </ul>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">Icons</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a className="hover:underline text-gray-600 hover:text-orange-500" href="https://www.flaticon.com/free-icons/project" rel="nofollow">dDara - Flaticon</a>
                </li>
                <li className="mt-2">
                  <a className="hover:underline text-gray-600 hover:text-orange-500" href="https://www.flaticon.com/free-icons/project-plan" rel="nofollow" >vectorsmarket15 - Flaticon</a>
                </li>
                <li className="mt-2">
                  <a className="hover:underline text-gray-600 hover:text-orange-500" href="https://www.flaticon.com/free-icons/project" rel="nofollow" >Eucalyp - Flaticon</a>
                </li>
                <li className="mt-2">
                  <a className="hover:underline text-gray-600 hover:text-orange-500" href="https://iconscout.com/icon/book-1168" rel="nofollow" >Daniel Bruce - Iconscout</a>
                </li>

              </ul>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">Morten Barklund on Social</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="//twitter.com/barklund" className="hover:underline text-gray-600 hover:text-orange-500">Twitter</a>
                </li>
                <li className="mt-2">
                  <a href="//linkedin.com/in/barklund" className="hover:underline text-gray-600 hover:text-orange-500">Linkedin</a>
                </li>
                <li className="mt-2">
                  <a href="//mortenbarklund.com/" className="hover:underline text-gray-600 hover:text-orange-500" title="Website of Morten Barklund about React, Testing and Accessibility">Website</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
