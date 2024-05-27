import { StarIcon } from "@heroicons/react/20/solid";

// Define the interface for the clothes data
interface ClothingItem {
  id: number;
  name: string;
  href: string;
  rating: number;
  reviewCount: number;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const clothes: ClothingItem[] = [
  {
    id: 1,
    name: "Shirt M&J White",
    href: "/store",
    rating: 4,
    reviewCount: 150,
    imageSrc: "/img/store/clothes/shirt-white-m&j.jpg",
    imageAlt: "white t-shirt with logo m&j.",
    price: "$699.00 MXN",
    color: "White / Black / Blue",
  },
  {
    id: 2,
    name: "Shirt LifeGuard",
    href: "/store",
    rating: 4,
    reviewCount: 110,
    imageSrc: "/img/store/clothes/lifeguard-shirt-white.jpg",
    imageAlt: "white t-shirt with logo safeguard.",
    price: "$549.00 MXN",
    color: "White / Orange",
  },
  {
    id: 3,
    name: "Hoddie Love Club",
    href: "/store",
    rating: 4,
    reviewCount: 170,
    imageSrc: "/img/store/clothes/Self-love-club-hoddie.jpg",
    imageAlt: "beige hoddie with logo self love club.",
    price: "$899.00 MXN",
    color: "Beige / Red",
  },
  {
    id: 4,
    name: "Shirt M&J White",
    href: "/store",
    rating: 4,
    reviewCount: 210,
    imageSrc: "/img/store/clothes/shirt-black-m&j.jpg",
    imageAlt: "black t-shirt with logo m&j.",
    price: "$699.00 MXN",
    color: "Black / Blue",
  },
  {
    id: 5,
    name: "Shirt Shine & Moon",
    href: "/store",
    rating: 4,
    reviewCount: 150,
    imageSrc: "/img/store/clothes/shirt-black.jpg",
    imageAlt: "Black t-shirt with logo shine and moon.",
    price: "$399.00 MXN",
    color: "Black / Purple / Moon",
  },
  {
    id: 6,
    name: "Shirt Beauty Roses",
    href: "/store",
    rating: 4,
    reviewCount: 138,
    imageSrc: "/img/store/clothes/shirt-white-men.jpg",
    imageAlt: "White t-shirt with logo rouses and beauty.",
    price: "$599.00 MXN",
    color: "White / Purple / Pink",
  },
  {
    id: 7,
    name: "Shirt Unlimited",
    href: "/store",
    rating: 4,
    reviewCount: 180,
    imageSrc: "/img/store/clothes/shirt-white-women.jpg",
    imageAlt: "white t-shirt with logo unlimited.",
    price: "$389.00 MXN",
    color: "White / Black / Red",
  },
];

export default function Clothes() {
  return (
    <div className="mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900" data-aos="fade-right">
        The most popular
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {clothes.map(
          ({
            id,
            name,
            href,
            rating,
            reviewCount,
            imageSrc,
            imageAlt,
            price,
            color,
          }) => (
            <div
              key={id}
              className="group relative hover:shadow-md border border-gray-200 rounded-md bg-white hover:transition-all"
              data-aos="fade-up"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200lg:aspect-none group-hover:opacity-90 lg:h-80 rounded-t-md hover:transition-all">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-96 w-full object-cover object-center lg:h-full lg:w-full"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between px-4 py-3">
                <div className="w-full space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm text-gray-700">
                      <a href={href}>
                        <span aria-hidden="true" className="absolute" />
                        {name}
                      </a>
                    </h3>
                    <p className="text-sm font-medium text-gray-900">{price}</p>
                  </div>

                  <div className="w-full">
                    <h4 className="sr-only">Reviews</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        {[0, 1, 2, 3, 4].map((ratingStars) => (
                          <StarIcon
                            key={ratingStars}
                            className={classNames(
                              rating > ratingStars
                                ? "text-amber-400"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>

                      <p className="sr-only">{rating} out of 5 stars</p>
                      <p className="text-sm text-orange-600 hover:text-orange-500">
                        {reviewCount} reviews
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">{color}</p>
                    <button
                      type="button"
                      className="bg-orange-600 flex items-center gap-2 py-2 px-4 rounded text-sm text-white hover:bg-orange-500 hover:gap-3 hover:transition-all"
                    >
                      Add
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
