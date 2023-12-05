import wedding from "../../assets/events/wedding.jpg";
import dinner from "../../assets/events/dinner.jpg";
import socialEvents from "../../assets/events/social events.jpg";
import nonProfit from "../../assets/events/nonprofit.jpg";

const Events = () => {
  return (
    <div className="my-20">
      <h1 className="text-5xl font-bold text-center">
        Plan Your Event With Our <br /> Services
      </h1>
      <p className="text-center mt-4 mb-12">
        Gravida nascetur elementum gravida congue netus neque, dui. Sit eget
        mattis nisi lacus duis <br /> nulla accumsan viverra vulputate. A ut
        pretium ullamcorper.
      </p>
      <div className="flex justify-center items-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={wedding} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Wedding Reception</h2>
          </div>
        </div>
        <div className="card w-96 mx-8 bg-base-100 shadow-xl">
          <figure>
            <img src={dinner} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Corporate Dinner</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={socialEvents} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Social Events</h2>
          </div>
        </div>
        <div className="card w-96 ml-8 bg-base-100 shadow-xl">
          <figure>
            <img src={nonProfit} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Non Profit Event</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
