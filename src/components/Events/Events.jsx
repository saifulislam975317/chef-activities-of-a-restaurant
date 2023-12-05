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
      <p className="text-center my-4">
        Gravida nascetur elementum gravida congue netus neque, dui. Sit eget
        mattis nisi lacus duis <br /> nulla accumsan viverra vulputate. A ut
        pretium ullamcorper.
      </p>
      <div className="flex justify-center items-center ">
        <div>
          <img src={wedding} alt="" />
          <p>Wedding Reception</p>
        </div>
        <div className="mx-4">
          <img src={dinner} alt="" />
          <p>Corporate Dinner</p>
        </div>
        <div>
          <img src={socialEvents} alt="" />
          <p>Social Events</p>
        </div>
        <div className="ml-4">
          <img src={nonProfit} alt="" />
          <p>Non Profit Event</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
