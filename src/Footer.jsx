import { Image } from "./App";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
        <div className="space-y-2">
          <Image imageName="logo.png" alt="Company Logo" className="w-36 h-auto" />
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">
            4710 W Dewey Dr STE 116, <br /> NV United States 89118
          </p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">ssrsrfy.jl@gmail.com</p>

          <div className="flex space-x-2">
            <a
              href="https://www.facebook.com"
              className="text-gray-600 hover:scale-110 transition duration-300 ease-in-out"
            >
              <i className="bx bxl-facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-gray-600 hover:scale-110 transition duration-300 ease-in-out"
            >
              <i className="bx bxl-twitter" />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-600 hover:scale-110 transition duration-300 ease-in-out"
            >
              <i className="bx bxl-instagram" />
            </a>
            <a
              href="https://www.youtube.com"
              className="text-gray-600 hover:scale-110 transition duration-300 ease-in-out"
            >
              <i className="bx bxl-youtube" />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-gray-600 hover:scale-110 transition duration-300 ease-in-out"
            >
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-black text-sm uppercase mb-2 font-bold">Support</h4>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">Contact us</p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">About page</p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">Size Guide</p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">Shopping & Returns</p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">Privacy</p>
        </div>

        <div className="space-y-2">
          <h4 className="text-gray-800 text-sm uppercase mb-2">Shop</h4>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">Men&apos;s Shopping</p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">Women&apos;s Shopping</p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">Kids&apos;s Shopping</p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">Furniture</p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">Discount</p>
        </div>

        <div className="space-y-2">
          <h4 className="text-gray-800 text-sm uppercase mb-2">Company</h4>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">About</p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">Blog</p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">Affiliate</p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">Login</p>
        </div>

        <div className="space-y-2">
          <h4 className="text-gray-800 text-sm uppercase mb-2">Subscribe</h4>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">
            Receive Updates, Hot Deals, Discounts Sent Straight In Your Inbox Daily
          </p>
          <p className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eum, Debitis.
          </p>
        </div>
      </div>

      <div className="bg-white text-center py-4">
        <p className="text-black capitalize">Copyright © 2023. All Rights Reserved. Designed By Znsalesgroup.</p>
      </div>
    </footer>
  );
};
