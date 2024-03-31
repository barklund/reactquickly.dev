import { Box } from "../components/box";
import { CTAButton } from "../components/button";

export function links() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Nunito:ital,wght@0,400;0,600;1,400&display=swap",
    },
  ];
}
export default function Index() {
  return (
    <>
      <header className="py-16 md:py-24 flex justify-center bg-gray-100">
        <div className="container flex flex-col justify-between items-center md:flex-row md:mx-16 md:w-3/4 md:mx-auto">
          <div className="w-4/5 md:w-1/2">
            <h1 className="text-box md:text-2xl font-display mb-2 md:mx-0 text-teal-300">
              Master React Fundamentals With The Latest Concepts and
              Real-World Examples
            </h1>
            <p className="my-8">
              <em>React Quickly, Second Edition</em> is a brand new book
              that will help you master the fundamentals of React with
              the latest techniques. Learn quickly and easily with clear
              explanations, numerous examples, and real-world projects
              you can use for reference. Pre-order your copy today!
            </p>
            <p className="mt-12">
              <CTAButton as="a" href="//barklund.dev/book">
                Buy now
              </CTAButton>
            </p>
          </div>
          <div className="w-3/4 md:w-2/5 md:shrink-0 mt-8 md:mt-0 mx-auto md:mx-0">
            <img src="/images/rq2e_blob.png" alt="Book cover" />
          </div>
        </div>
      </header>
      <main className="w-full flex flex-col items-stretch">
        <section className="flex justify-center items-center py-20">
          <Box className="w-4/5 md:w-3/5 p-12 md:p-20 pb-4 flex flex-col gap-4 relative">
            <blockquote className="md:text-md">
              <span className="absolute left-4 top-[-8px] md:top-12 font-display text-orange-300 text-[70px] md:text-[130px]">
                “
              </span>
              The writing style kept me engaged and made learning more
              fun. This book is a great combination having explanations,
              examples and workable projects that a learner would have a
              hard time getting from free videos or blog posts.
            </blockquote>
            <p className="text-box md:text-lg font-display font-semibold items-center flex gap-4 md:gap-8">
              <img src="/icons/profile.svg" width="36" />
              <span>Brent Boylan</span>
            </p>
          </Box>
        </section>
        <section
          className="bg-cover text-white py-16"
          style={{ backgroundImage: "url(/images/rq2e_section.jpg)" }}
        >
          <div className="flex flex-col justify-between items-center md:flex-row mx-4 md:mx-16 md:w-3/4 md:mx-auto gap-8 md:gap-[25%]">
            <div>
              <h2 className="font-display font-semibold text-xl mb-8">
                Looking to{" "}
                <strong className="text-orange-300 font-semibold">
                  dive into React
                </strong>{" "}
                but don't know where to begin?
              </h2>
              <p className="mb-4">
                Trying to tackle a new programming framework can be
                overwhelming. It's a jungle out there with tons of
                misleading resources and courses, but don't worry,{" "}
                <em>React Quickly, 2nd edition</em> has your back!
              </p>
              <p className="mb-4">
                Say goodbye to wasting time and running into roadblocks
                because, with this book, nothing can stop you from
                learning React!
              </p>
              <p className="mb-4">
                <em>React Quickly</em> is a well-structured source that
                will take you from know-nothing to well-learned. This
                book covers all the fundamentals of React - from the
                basics up - so you get the comprehensive knowledge you
                need without getting overwhelmed or confused.
              </p>
              <p className="">
                So buckle up and prepare to take the tech world by storm
                with your newfound React skills!
              </p>
            </div>
            <img
              src="/images/questioning.png"
              className="w-3/4 max-w-xs md:w-1/3"
              alt=""
            />
          </div>
        </section>
        <section className="flex flex-col justify-between items-stretch mx-4 gap-8 md:flex-row md:mx-16 md:w-3/4 md:mx-auto md:gap-12 py-12 md:py-32 md:flex-wrap xl:flex-nowrap">
          <Box className="flex items-center flex-col gap-4 md:gap-8 justify-between p-4 md:p-8 text-center md:w-[47%] xl:w-auto">
            <img
              src="/images/indepth-icon.png"
              className="w-12 md:w-16"
              style={{
                filter:
                  "invert(63%) sepia(40%) saturate(623%) hue-rotate(132deg) brightness(83%) contrast(97%)",
              }}
              alt="In-depth"
            />
            <h4 className="md:text-box font-display font-semibold">
              Updated with the latest concepts
            </h4>
            <p className="text-sm md:text-base">
              With over 350 pages of in-depth content, you'll learn
              everything from component architecture to React hooks,
              form and event handling. This second edition includes the
              latest React techniques for 2023 and is perfect for anyone
              looking to master the fundamentals.
            </p>
          </Box>

          <Box className="flex items-center flex-col gap-4 md:gap-8 justify-between p-4 md:p-8 text-center md:w-[47%] xl:w-auto">
            <img
              src="/images/beginner-icon.png"
              className="w-12 md:w-16"
              style={{
                filter:
                  "invert(63%) sepia(40%) saturate(623%) hue-rotate(132deg) brightness(83%) contrast(97%)",
              }}
              alt="Beginner"
            />
            <h4 className="md:text-box font-display font-semibold">
              For everyone
            </h4>
            <p className="text-sm md:text-base">
              Whether a beginner or an experienced React developer, this
              book has something for everyone. Get up to speed quickly
              with clear introductions to every chapter that guide you
              through the relevant material. Discover things you never
              knew about React - even if you've been using it for years!{" "}
            </p>
          </Box>

          <Box className="flex items-center flex-col gap-4 md:gap-8 justify-between p-4 md:p-8 text-center md:w-[47%] xl:w-auto">
            <img
              src="/images/examples-icon.png"
              className="w-12 md:w-16"
              style={{
                filter:
                  "invert(63%) sepia(40%) saturate(623%) hue-rotate(132deg) brightness(83%) contrast(97%)",
              }}
              alt="Example"
            />
            <h4 className="md:text-box font-display font-semibold">
              80+ examples to grow your skills
            </h4>
            <p className="text-sm md:text-base">
              Improve your React coding skills & speed up development
              time with real-world examples of small widgets and
              structures you can copy-paste into your application.
              You'll be able to save time, increase efficiency, and
              solve complex problems without reinventing the wheel.
            </p>
          </Box>

          <Box className="flex items-center flex-col gap-4 md:gap-8 justify-between p-4 md:p-8 text-center md:w-[47%] xl:w-auto">
            <img
              src="/images/blueprint-icon.png"
              className="w-12 md:w-16"
              style={{
                filter:
                  "invert(63%) sepia(40%) saturate(623%) hue-rotate(132deg) brightness(83%) contrast(97%)",
              }}
              alt="Projects"
            />
            <h4 className="md:text-box font-display font-semibold">
              Learn by doing
            </h4>
            <p className="text-sm md:text-base">
              Our 3 immersive projects challenge you to apply your new
              skills while our tips and tricks help you succeed every
              step of the way. Experience the power of React as you
              build applications from scratch and get to grips with
              real-world development scenarios.
            </p>
          </Box>
        </section>
        <section
          className="bg-cover text-white"
          style={{ backgroundImage: "url(/images/rq2e_section.jpg)" }}
        >
          <div className="mx-auto pb-12 w-full md:w-3/4 flex flex-col md:flex-row gap-4 md:gap-32 md:justify-between items-center md:items-start">
            <img
              src="/images/idea.png"
              className="w-1/2 md:w-2/5"
              alt=""
            />
            <div className="px-8 md:px-0 md:pt-12">
              <h3 className="text-lg font-display font-semibold ">
                What you will{" "}
                <strong className="text-orange-300 font-semibold">
                  learn
                </strong>{" "}
              </h3>
              <ul className="py-4 flex flex-col gap-4 list-disc">
                <li>
                  <strong>Familiarize yourself with React</strong> and
                  how it works as a JavaScript library for building user
                  interfaces. Learn it step-by-step, from understanding
                  its basic concepts to creating small React components.
                </li>
                <li>
                  <strong>Introduction to JSX</strong>, a syntax
                  extension for JavaScript that allows for the easy
                  creation of HTML-like syntax within JavaScript code to
                  create dynamic components
                </li>
                <li>
                  <strong>Understanding functional components</strong>,
                  which are more lightweight and easier to test than
                  class components, and how to use them in React.
                </li>
                <li>
                  <strong>Explore stateful components</strong> and how
                  they make your app interactive, allowing components to
                  update and render based on user input or other events.
                </li>
                <li>
                  <strong>Learn about React hooks</strong>, which are
                  functions that allow developers to use React features
                  in functional components.
                </li>
                <li>
                  <strong>Handle events</strong> like button clicks or
                  form submissions in React and how to pass data between
                  components.
                </li>
                <li>And much more!</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-6 py-8 md:py-20">
            <h2 className="text-box md:text-lg font-display font-semibold text-center mb-8">
              Why our customers{" "}
              <strong className="text-teal-300 font-semibold">
                love it
              </strong>
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 ">
              <Box className="mx-4 md:w-1/4 p-8 pt-14 md:p-12 md:pt-16 pb-8 flex flex-col gap-8 justify-between relative">
                <blockquote>
                  <span className="absolute left-2 top-1 md:top-[-16px] font-display text-orange-300 text-[60px] md:text-[100px]">
                    “
                  </span>
                  Loved the book! The code projects used were engaging
                  and small enough to be understandable and just large
                  enough to get the point across. Loved the projects and
                  how they built on each other and provided some
                  challenge.
                </blockquote>
                <p className="md:text-box font-display font-semibold flex gap-2">
                  <img src="/icons/profile.svg" width="24" />
                  <span>Michelle Williamson</span>
                </p>
              </Box>
              <Box className="mx-4 md:w-1/4 p-8 pt-14 md:p-12 md:pt-16 pb-8 flex flex-col gap-8 justify-between relative">
                <blockquote>
                  <span className="absolute left-2 top-1 md:top-[-16px] font-display text-orange-300 text-[60px] md:text-[100px]">
                    “
                  </span>
                  This book is a comprehensive introduction to React,
                  including detailed explanations of the concepts and
                  techniques needed to build modern applications.
                </blockquote>
                <p className="md:text-box font-display font-semibold flex gap-2">
                  <img src="/icons/profile.svg" width="24" />
                  <span>Bernard Fuentes</span>
                </p>
              </Box>
              <Box className="mx-4 md:w-1/4 p-8 pt-14 md:p-12 md:pt-16 pb-8 flex flex-col gap-8 justify-between relative">
                <blockquote>
                  <span className="absolute left-2 top-1 md:top-[-16px] font-display text-orange-300 text-[60px] md:text-[100px]">
                    “
                  </span>
                  I have a whole library of computer text books
                  collected over the last 30 years. This is one of the
                  most readable and comprehensive with so many examples
                  and the best supporting website I've come across. Well
                  done.
                </blockquote>
                <p className="md:text-box font-display font-semibold flex gap-2">
                  <img src="/icons/profile.svg" width="24" />
                  <span>Brendan O'Hara</span>
                </p>
              </Box>
            </div>
          </div>
        </section>
        <section>
          <div className="py-8 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-20 lg:items-stretch">
            <div
              className="h-52 lg:h-auto bg-right overflow bg-cover w-4/5 lg:basis-2/5 xl:basis-1/3"
              style={{ backgroundImage: "url(/images/rq2e+jrr.png)" }}
            />
            <div className="mx-4 lg:py-16 md:pl-0 lg:pr-32 lg:w-1/2">
              <h2 className="mb-6 text-box md:text-lg font-display font-semibold ">
                Want to understand{" "}
                <strong className="text-teal-300 font-semibold">
                  React in Depth
                </strong>
                ?
              </h2>
              <h3 className="my-4">
                Then check out our companion book:{" "}
                <em>React in Depth</em>! This book is a comprehensive
                guide that will take you from junior to becoming a
                master React developer. Get up to speed quickly with the
                tools and tricks experienced developers use, and learn
                how to build world-class applications with confidence.
                Advance to a professional career with{" "}
                <em>React in Depth</em>!
              </h3>
              <CTAButton
                href="//reactindepth.dev"
                rounded
                className="uppercase"
              >
                Read more about <em>React in Depth</em>
              </CTAButton>
            </div>
          </div>
        </section>
        <section
          className="px-4 mt-12 bg-cover text-white py-16 w-full"
          style={{ backgroundImage: "url(/images/rq2e_section.jpg)" }}
        >
          <div className="container mx-auto text-center">
            <h2 className="mb-2 text-lg font-display font-semibold  text-center">
              Get Early{" "}
              <strong className="text-orange-300 font-semibold">
                Access
              </strong>{" "}
              now
            </h2>
            <h3 className="my-10">
              Get the digital copy available in Manning Early Access
              Program now and help shape the content.
            </h3>
            <CTAButton href="//barklund.dev/book" rounded dark={false}>
              Buy now
            </CTAButton>
          </div>
        </section>
        <section className="py-16 w-full">
          <h2 className="text-box md:text-xl font-display font-semibold text-center mb-8">
            About the{" "}
            <strong className="text-teal-300 font-semibold">
              Authors
            </strong>
          </h2>
          <div className="my-4 md:my-32 flex justify-start items-start md:items-stretch flex-col md:flex-row md:mb-20 gap-8 md:gap-[20%]">
            <div
              className="h-52 w-3/4 md:h-auto md:max-h-64 md:w-1/3 lg:w-1/4 bg-contain bg-no-repeat bg-left bg-top"
              style={{
                backgroundImage:
                  "url(/images/rq2e_author_barklund.png)",
              }}
            ></div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-8 xl:p-20">
              <h4 className="text-box md:text-xl font-display font-semibold mb-2 md:mb-8">
                Morten Barklund
              </h4>
              <p className="md:mb-8">
                <strong>Morten Barklund</strong> is an independent
                software developer working as a lead developer in
                various teams, including an open-source React project
                funded by Google. Morten studied Computer Science at the
                Technical University of Denmark and has worked on
                hundreds of projects during over 20 years as a web
                developer.
              </p>
            </div>
          </div>

          <div className="my-4 md:my-32 flex justify-start items-end md:items-stretch flex-col md:flex-row-reverse md:mb-20 gap-8 md:gap-[20%]">
            <div
              className="h-52 w-3/4 md:h-auto md:max-h-64 md:basis-1/3 lg:basis-1/4 bg-contain bg-no-repeat bg-right bg-top"
              style={{
                backgroundImage: "url(/images/rq2e_author_azat.png)",
              }}
            ></div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-8 xl:p-20">
              <h4 className="text-box md:text-xl font-display font-semibold mb-2 md:mb-8">
                Azat Mardan
              </h4>
              <p className="md:mb-8">
                <strong>Azat Mardan</strong> is a software engineer
                leader and a university professor with extensive
                experience using and teaching JavaScript and Node. He's
                the author of several books on JavaScript, Node, React,
                and Express, including the first edition of React
                Quickly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="md:mt-12 bg-cover text-white py-8 bg-teal-700">
        <div className="container mx-auto px-6 pt-10 pb-6">
          <div className="flex flex-col md:flex-row  gap-4">
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">
                Links
              </h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="//barklund.dev/book"
                    className="hover:underline"
                  >
                    Purchase
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="https://livebook.manning.com/book/react-quickly-second-edition/welcome/v-1/9"
                    className="hover:underline"
                  >
                    Book forum
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="https://github.com/rq2e/rq2e"
                    className="hover:underline"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">
                Follow Morten Barklund elsewhere
              </h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="//linkedin.com/in/barklund"
                    className="hover:underline"
                  >
                    Follow me on Linkedin
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="//mortenbarklund.com/"
                    className="hover:underline"
                    title="Website of Morten Barklund about React, Testing and Accessibility"
                  >
                    Morten Barklund – React, Testing, and Accessibility
                    expert
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="//mortenbarklund.com/"
                    className="hover:underline"
                    title="Website of Morten Barklund about React, Testing and Accessibility"
                  >
                    Coding Heaven – advanced workshops and courses
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">
                Icons and images
              </h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    className="hover:underline"
                    href="https://www.freepik.com/free-vector/creative-person-concept_749596.htm"
                    rel="nofollow"
                  >
                    Freepik
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="hover:underline"
                    rel="nofollow"
                    href="https://www.freepik.com/free-vector/back-view-man-making-business-decision-flat-illustration-cartoon-character-thinking-about-options-questions-marks-around-him-success-searching-solution-strategy-concept_16333426.htm"
                  >
                    pch.vector
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="hover:underline"
                    href="https://www.flaticon.com/free-icons/project"
                    rel="nofollow"
                  >
                    dDara, vectorsmarket15, Eucalyp, Smashicons -
                    Flaticon
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="hover:underline"
                    href="https://iconscout.com/icon/book-1168"
                    rel="nofollow"
                  >
                    Daniel Bruce - Iconscout
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
