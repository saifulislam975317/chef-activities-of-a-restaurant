import aboutImg from "../../assets/about/about us.png";
const About = () => {
  return (
    <div>
      <div className="hero  bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <img src={aboutImg} className=" rounded-lg " />
          <div>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla et consequat massa quis enim. Donec pede justo,
              fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
            <p>
              Aenean massa. Cum sociis natoque penatibus magnis dis parturient
              montes.
            </p>
            <p>
              Aenean massa. Cum sociis natoque penatibus magnis dis parturient
              montes.
            </p>
            <p>
              Aenean massa. Cum sociis natoque penatibus magnis dis parturient
              montes.
            </p>
            <p>
              Aenean massa. Cum sociis natoque penatibus magnis dis parturient
              montes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
