import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Barvaliya</h1>
          <p>Kalju sinh nu rakho</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            dolorem inventore architecto quibusdam officia repudiandae obcaecati
            a illum atque laboriosam numquam nesciunt repellendus culpa earum,
            odio quidem non consequuntur sit!
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur nisi voluptates ex porro consectetur eaque molestiae
            impedit. Earum, sint iste neque harum ullam voluptatibus facilis
            aliquam sed obcaecati voluptatem ex accusantium ad quidem officia
            dicta ipsam, ea, consectetur numquam optio adipisci.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <artical>
          <div style={{
            animationDelay: "0.3s",
          }}>
          <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay: "0.5s",
          }}>
          <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay: "0.7s",
          }}>
          <AiFillYoutube/>
            <p>YouTube</p>
          </div>
          <div style={{
            animationDelay: "1s",
          }}>
          <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </artical>
      </div>

      </div>
    </>
  );
};

export default Home;
