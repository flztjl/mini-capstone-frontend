import "./index.css";
import { Image } from "./App";

export const Home = () => {
  return (
    <>
      <section className="main-home">
        <div className="main-text">
          <h5>Black Friday Event</h5>
          <h1>
            Winter Sales <br /> Event 2023
          </h1>
          <p>Big savings is coming</p>

          <a href="#" className="main-btn">
            Shop Now <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>

        <div className="down-arrow">
          <a href="#trending" className="down">
            <i className="bx bx-down-arrow-alt"></i>
          </a>
        </div>
      </section>

      <section className="trending-product" id="trending">
        <div className="center-text">
          <h2>
            Our Trending <span>products</span>
          </h2>
        </div>

        <div className="products">
          <div className="row">
            <Image imageName="1.jpg" alt="" />
            <div className="product-text">
              <h5>Sale</h5>
            </div>
            <div className="heart-icon">
              <i className="bx bx-heart"></i>
            </div>
            <div className="ratting">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <div className="price">
              <h4>Half Running Set</h4>
              <p>$99 - $129</p>
            </div>
          </div>

          <div className="row">
            <Image imageName="2.jpg" alt="" />
            <div className="product-text">
              <h5>New</h5>
            </div>
            <div className="heart-icon">
              <i className="bx bx-heart"></i>
            </div>
            <div className="ratting">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <div className="price">
              <h4>Formal Men Lowers</h4>
              <p>$99 - $129</p>
            </div>
          </div>

          <div className="row">
            <Image imageName="3.jpg" alt="" />
            <div className="heart-icon">
              <i className="bx bx-heart"></i>
            </div>
            <div className="ratting">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>

            <div className="price">
              <h4>Half Running Suit</h4>
              <p>$99 - $129</p>
            </div>
          </div>

          <div className="row">
            <Image imageName="4.jpg" alt="" />
            <div className="product-text">
              <h5>Hot</h5>
            </div>
            <div className="heart-icon">
              <i className="bx bx-heart"></i>
            </div>
            <div className="ratting">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <div className="price">
              <h4>Half Fancy Lady Dress</h4>
              <p>$99 - $129</p>
            </div>
          </div>

          <div className="row">
            <Image imageName="5.jpg" alt="" />
            <div className="heart-icon">
              <i className="bx bx-heart"></i>
            </div>
            <div className="ratting">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>

            <div className="price">
              <h4>Flix Flox Jeans</h4>
              <p>$99 - $129</p>
            </div>
          </div>

          <div className="row">
            <Image imageName="6.jpg" alt="" />
            <div className="product-text">
              <h5>Hot</h5>
            </div>
            <div className="heart-icon">
              <i className="bx bx-heart"></i>
            </div>
            <div className="ratting">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>

            <div className="price">
              <h4>Fancy Salwar Suits</h4>
              <p>$99 - $129</p>
            </div>
          </div>

          <div className="row">
            <Image imageName="7.jpg" alt="" />
            <div className="product-text">
              <h5>Sale</h5>
            </div>
            <div className="heart-icon">
              <i className="bx bx-heart"></i>
            </div>
            <div className="ratting">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>

            <div className="price">
              <h4>Printed Straight Kurta</h4>
              <p>$99 - $129</p>
            </div>
          </div>

          <div className="row">
            <Image imageName="8.jpg" alt="" />
            <div className="product-text">
              <h5>Sale</h5>
            </div>
            <div className="heart-icon">
              <i className="bx bx-heart"></i>
            </div>
            <div className="ratting">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>

            <div className="price">
              <h4>Collot Full Dress</h4>
              <p>$99 - $129</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
