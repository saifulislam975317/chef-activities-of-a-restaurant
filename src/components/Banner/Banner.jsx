import chef from "../../assets/chef1.png";
const Banner = () => {
  return (
    <div>
      <div className=" bg-gray-600 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chef} className=" rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold text-orange-500">
              A Famous & <br /> Authentic <br /> Restaurant
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
