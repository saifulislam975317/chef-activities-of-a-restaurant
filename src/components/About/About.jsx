import aboutImg from "../../assets/about/about us.png";
import { FaHandPointRight } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { GiOpenedFoodCan } from "react-icons/gi";
const About = () => {
  return (
    <div>
      <h1 className="text-4xl mt-8 font-bold text-center">About Us</h1>
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
              <FaHandPointRight className="font-bold text-xl inline-block mr-2" />
              Aenean massa. Cum sociis natoque penatibus magnis dis parturient
              montes.
            </p>
            <p>
              <FaHandPointRight className="font-bold text-xl inline-block mr-2" />
              Aenean massa. Cum sociis natoque penatibus magnis dis parturient
              montes.
            </p>
            <p>
              <FaHandPointRight className="font-bold text-xl inline-block mr-2" />
              Aenean massa. Cum sociis natoque penatibus magnis dis parturient
              montes.
            </p>
            <p>
              <FaHandPointRight className="font-bold text-xl inline-block mr-2" />
              Aenean massa. Cum sociis natoque penatibus magnis dis parturient
              montes.
            </p>
            <div className="flex justify-center items-center mt-12">
              <div>
                <IoFastFood className="text-3xl mb-2 text-orange-300" />
                <h1 className="text-lg font-bold">100 % Fresh Organic Foods</h1>
                <p>
                  Dolor sit amet consectetuer adipiscn elit commodo ligula eget
                  dolor. Aenean etsa massa Cum sociis natoque.
                </p>
              </div>
              <div>
                <GiOpenedFoodCan className="text-3xl mb-2 text-orange-300" />
                <h1 className="font-bold text-lg">
                  Great Food Taste and quality
                </h1>
                <p>
                  Dolor sit amet consectetuer adipiscn elit commodo ligula eget
                  dolor. Aenean etsa massa Cum sociis natoque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
