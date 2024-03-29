import React,{useState, useEffect,useRef} from "react";

const Carousel = () => {
    const resources = [
      {
            "id":"64662e9a86b3b2d2e5487540",
            "title": "Murder on the orient express",
            "author": "Agatha Christie",
            "imageUrl":"https://images.thalia.media/07/-/6aea714dfd9e437ea2f24a3c378b5645/murder-on-the-orient-express-taschenbuch-agatha-christie-englisch.jpeg"
        },
      {
            "id":"649b4034f82e4ffe7237d57d",
            "title": "Death on the nile",
            "author": "Agatha Christie",
            "imageUrl":"https://elzareads.com/wp-content/uploads/sites/403/2022/02/Death-on-the-nile.jpg"
        },
      {
            "id":"649b41e8f82e4ffe7237d581",
            "title": "The Murder of Roger Ackroyd",
            "author": "Agatha Christie",
            "imageUrl":"https://m.media-amazon.com/images/I/819CsusPr3L.jpg"
        },
      {
            "id":"649b4307f82e4ffe7237d584",
            "title": "The Mysterious Affair at Styles",
            "author": "Agatha Christie",
            "imageUrl":"https://m.media-amazon.com/images/I/81nvTKHsi5L.jpg"
        },
      {
            "id":"64b705cda14d776b7c4be36e",
            "title": "Hallowe'en Party",
            "author": "Agatha Christie",
            "imageUrl":"https://m.media-amazon.com/images/I/71gxfalUdaL.jpg"
        },
      {
            "id":"64662e9a86b3b2d2e5487540",
            "title": "Murder on the orient express",
            "author": "Agatha Christie",
            "imageUrl":"https://images.thalia.media/07/-/6aea714dfd9e437ea2f24a3c378b5645/murder-on-the-orient-express-taschenbuch-agatha-christie-englisch.jpeg"
        },
      {
            "id":"649b4034f82e4ffe7237d57d",
            "title": "Death on the nile",
            "author": "Agatha Christie",
            "imageUrl":"https://elzareads.com/wp-content/uploads/sites/403/2022/02/Death-on-the-nile.jpg"
        },
      {
            "id":"649b41e8f82e4ffe7237d581",
            "title": "The Murder of Roger Ackroyd",
            "author": "Agatha Christie",
            "imageUrl":"https://m.media-amazon.com/images/I/819CsusPr3L.jpg"
        },
      {
            "id":"649b4307f82e4ffe7237d584",
            "title": "The Mysterious Affair at Styles",
            "author": "Agatha Christie",
            "imageUrl":"https://m.media-amazon.com/images/I/81nvTKHsi5L.jpg"
        },
      {
            "id":"64b705cda14d776b7c4be36e",
            "title": "Hallowe'en Party",
            "author": "Agatha Christie",
            "imageUrl":"https://m.media-amazon.com/images/I/71gxfalUdaL.jpg"
        }
]

const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
    //console.log(carousel)

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction:unknown) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);
    return(
<>
<div className="carousel my-12 mx-auto  rounded-sm shadow-xl h-auto lg:p-12">
    <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
      Author of The Month
    </h2>
    <div className="relative overflow-hidden">
      <div className="flex justify-between absolute top left w-full h-full">
        <button
          onClick={movePrev}
          className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          disabled={isDisabled('prev')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-20 -ml-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Prev</span>
        </button>
        <button
          onClick={moveNext}
          className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          disabled={isDisabled('next')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-20 -ml-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>
      <div
         ref={carousel}
        className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
      >
        {resources.map((resource, index) => {
          return (
            <div
              key={index}
              className="carousel-item text-center relative w-64 h-[440px] snap-start"
            >
              <a
                href={`/book/${resource.id}`}
                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
              >
                <img
                  src={resource.imageUrl || ''}
                  alt={resource.title}
                  className="w-full  aspect-square hidden"
                />
              </a>
              <a
                href={`/book/${resource.id}`}
                className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
              >
                <h3 className="text-white py-6 px-3 mx-auto text-xl">
                  {resource.title}
                </h3>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </div>

</>
)}

export default Carousel;