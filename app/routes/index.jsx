export default function Index() {
  return (
    <>
      <header
        className="py-16 md:py-24 flex justify-center"
        style={{
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container flex flex-col justify-center md:flex-row md:mx-16 md:w-3/4 md:mx-auto">
          <div className="">
            <h2 className="text-4xl italic md:text-5xl font-bold mb-2 text-white mx-4 md:md-0">
              Master React Fundamentals With The Latest Concepts and Real-World
              Examples
            </h2>
            <p className="mb-8 text-white mx-4 mr-8 md:md-0">
              <em>React Quickly, Second Edition</em> is a brand new book that
              will help you master the fundamentals of React with the latest
              techniques. Learn quickly and easily with clear explanations,
              numerous examples, and real-world projects you can use for
              reference. Pre-order your copy today!
            </p>
            <p className="mt-16 mx-4 md:md-0">
              <a
                href="//barklund.dev/book"
                className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
              >
                Buy now
              </a>
            </p>
          </div>
          <div className="w-3/4 md:w-1/3 md:shrink-0 mt-8 md:mt-0 mx-auto md:mx-0">
            <img src="/images/book.png" alt="Book cover" />
          </div>
        </div>
      </header>
      <main>
        <section>
          <blockquote className="container mx-auto p-16 px-6 w-full md:w-1/2 text-2xl">
            <em>
              The writing style kept me engaged and made learning more fun.
              <br />
              This book is a great combination having explanations, examples and
              workable projects that a learner would have a hard time getting
              from free videos or blog posts.
            </em>
            <br />– Brent Boylan
          </blockquote>
        </section>
        <section className="bg-gray-100">
          <div className="mx-auto p-14 px-6 w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">
              Looking to dive into React but don't know where to begin?
            </h2>
            <p className="text-gray-600 mb-2">
              Trying to tackle a new programming framework can be overwhelming.
              It's a jungle out there with tons of misleading resources and
              courses, but don’t worry, <em>React Quickly, 2nd edition</em> has
              your back!
            </p>
            <p className="text-gray-600 mb-2">
              Say goodbye to wasting time and running into roadblocks because,
              with this book, nothing can stop you from learning React!
            </p>
            <p className="text-gray-600 mb-2">
              <em>React Quickly</em> is a well-structured source that will take
              you from know-nothing to well-learned. This book covers all the
              fundamentals of React - from the basics up - so you get the
              comprehensive knowledge you need without getting overwhelmed or
              confused.
            </p>
            <p className="text-gray-600 mb-8">
              So buckle up and prepare to take the tech world by storm with your
              newfound React skills!
            </p>
          </div>
        </section>
        <section className="container mx-auto p-10 px-6 w-full md:w-1/2">
          <div className="flex items-center flex-col md:flex-row-reverse mb-20 gap-4 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="/images/indepth-icon.png"
                className="w-1/3 md:w-1/2 mx-auto"
                alt="In-depth"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">
                Updated with the latest concepts
              </h4>
              <p className="text-gray-600 mb-8">
                With over 350 pages of in-depth content, you'll learn everything
                from component architecture to React hooks, form and event
                handling. This second edition includes the latest React
                techniques for 2023 and is perfect for anyone looking to master
                the fundamentals.
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row mb-20 gap-4 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="/images/beginner-icon.png"
                className="w-1/3 md:w-1/2 mx-auto"
                alt="Beginner"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">
                For everyone
              </h4>
              <p className="text-gray-600 mb-8">
                Whether a beginner or an experienced React developer, this book
                has something for everyone. Get up to speed quickly with clear
                introductions to every chapter that guide you through the
                relevant material. Discover things you never knew about React -
                even if you've been using it for years!{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row-reverse mb-20 gap-4 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="/images/examples-icon.png"
                className="w-1/3 md:w-1/2 mx-auto"
                alt="Example"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">
                80+ examples to grow your skills
              </h4>
              <p className="text-gray-600 mb-8">
                Improve your React coding skills & speed up development time
                with real-world examples of small widgets and structures you can
                copy-paste into your application. You'll be able to save time,
                increase efficiency, and solve complex problems without
                reinventing the wheel.
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row mb-20 gap-4 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="/images/blueprint-icon.png"
                className="w-1/3 md:w-1/2 mx-auto"
                alt="Projects"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">
                Learn by doing
              </h4>
              <p className="text-gray-600 mb-8">
                Our 3 immersive projects challenge you to apply your new skills
                while our tips and tricks help you succeed every step of the
                way. Experience the power of React as you build applications
                from scratch and get to grips with real-world development
                scenarios.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="mx-auto p-14 px-6 w-full md:w-3/5">
            <h3 className="text-2xl md:text-3xl text-gray-800 font-bold mb-3">
              What you will learn
            </h3>
            <ul className="text-gray-600 py-4 flex flex-col gap-4 list-disc">
              <li>
                <strong>Familiarize yourself with React</strong> and how it
                works as a JavaScript library for building user interfaces.
                Learn it step-by-step, from understanding its basic concepts to
                creating small React components.
              </li>
              <li>
                <strong>Introduction to JSX</strong>, a syntax extension for
                JavaScript that allows for the easy creation of HTML-like syntax
                within JavaScript code to create dynamic components
              </li>
              <li>
                <strong>Understanding functional components</strong>, which are
                more lightweight and easier to test than class components, and
                how to use them in React.
              </li>
              <li>
                <strong>Explore stateful components</strong> and how they make
                your app interactive, allowing components to update and render
                based on user input or other events.
              </li>
              <li>
                <strong>Learn about React hooks</strong>, which are functions
                that allow developers to use React features in functional
                components.
              </li>
              <li>
                <strong>Handle events</strong> like button clicks or form
                submissions in React and how to pass data between components.
              </li>
              <li>And much more!</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Testimonials
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Loved the book! The code projects used were engaging and
                    small enough to be understandable and just large enough to
                    get the point across. Loved the projects and how they built
                    on each other and provided some challenge.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Michelle Williamson
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    This book is a comprehensive introduction to React,
                    including detailed explanations of the concepts and
                    techniques needed to build modern applications.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Bernard Fuentes
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    I have a whole library of computer text books collected over
                    the last 30 years. This is one of the most readable and
                    comprehensive with so many examples and the best supporting
                    website I've come across. Well done.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Brendan O'Hara
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="container mx-auto px-6 py-20 flex flex-col xl:flex-row gap-8 items-center">
            <img src="/images/two-books.jpg" width="500" alt="Two books" />
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                Want to become a React Pro?
              </h2>
              <h3 className="my-4 text-2xl">
                Then check out our companion book: <em>React like a Pro</em>!
                This book is a comprehensive guide that will take you from
                amateur to becoming a professional React developer. Get up to
                speed quickly with the tools and tricks experienced developers
                use, and learn how to build world-class applications with
                confidence. Advance to a professional career with{" "}
                <em>React like a Pro</em>!
              </h3>
              <p className="mt-16">
                <a
                  href="//reactlikea.pro"
                  style={{ backgroundColor: "#667eea" }}
                  className="text-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
                >
                  Read more about <em>React like a Pro</em>
                </a>
              </p>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: "#667eea" }}>
          <div className="container mx-auto px-6 text-center py-20">
            <h2 className="mb-6 text-4xl font-bold text-center text-white">
              Get Early Access Now
            </h2>
            <h3 className="my-4 text-2xl text-white">
              Get the digital copy available in Manning Early Access Program now
              and help shape the content.
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
              <h4 className="text-2xl text-gray-800 font-bold mb-3">
                Morten Barklund
              </h4>
              <p className="text-gray-600 mb-8">
                <strong>Morten Barklund</strong> is an independent software
                developer working as a lead developer in various teams,
                including an open-source React project funded by Google. Morten
                studied Computer Science at the Technical University of Denmark
                and has worked on hundreds of projects during over 20 years as a
                web developer.
              </p>
            </div>
          </div>

          <div className="my-24 flex justify-center items-center flex-col md:flex-row mb-20 gap-8 md:gap-12">
            <div className="w-1/2 md:w-1/4 rounded-full overflow-hidden">
              <img src="/images/mardan.jpeg" alt="Azat Mardan" />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-2xl text-gray-800 font-bold mb-3">
                Azat Mardan
              </h4>
              <p className="text-gray-600 mb-8">
                <strong>Azat Mardan</strong> is a software engineer leader and a
                university professor with extensive experience using and
                teaching JavaScript and Node. He’s the author of several books
                on JavaScript, Node, React, and Express, including the first
                edition of React Quickly.
              </p>
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
                  <a
                    href="//barklund.dev/book"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Purchase
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="https://livebook.manning.com/book/react-quickly-second-edition/welcome/v-1/9"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Book forum
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="https://github.com/rq2e/rq2e"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">Icons</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    className="hover:underline text-gray-600 hover:text-orange-500"
                    href="https://www.flaticon.com/free-icons/project"
                    rel="nofollow"
                  >
                    dDara, vectorsmarket15, Eucalyp, Smashicons - Flaticon
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="hover:underline text-gray-600 hover:text-orange-500"
                    href="https://iconscout.com/icon/book-1168"
                    rel="nofollow"
                  >
                    Daniel Bruce - Iconscout
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">
                Morten Barklund on Social
              </h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="//twitter.com/barklund"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="//linkedin.com/in/barklund"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="//mortenbarklund.com/"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                    title="Website of Morten Barklund about React, Testing and Accessibility"
                  >
                    Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
