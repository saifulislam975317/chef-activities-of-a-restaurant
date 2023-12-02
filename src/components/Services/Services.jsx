import servicesImg from "../../assets/services/services.png";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdEventSeat } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";
import { MdDinnerDining } from "react-icons/md";
const Services = () => {
  return (
    <div className="my-12">
      <h1 className="text-center text-4xl mb-8 font-bold">Services</h1>
      <div className="flex justify-evenly items-center">
        <div>
          <div className="my-4 space-y-2">
            <LiaBirthdayCakeSolid className="font-bold text-4xl" />
            <h1 className="text-lg font-bold">Birthday Party</h1>
            <p>
              Dolor sit amet consectetuer adipiscn elit commodo ligula eget
              dolor. Aenean etsa massa Cum sociis natoque.
            </p>
          </div>
          <div className="my-4 space-y-2">
            <MdEventSeat className="font-bold text-4xl" />
            <h1 className="text-lg font-bold">Charity Events</h1>
            <p>
              Dolor sit amet consectetuer adipiscn elit commodo ligula eget
              dolor. Aenean etsa massa Cum sociis natoque.
            </p>
          </div>
        </div>
        <div>
          <img className="w-full h-full" src={servicesImg} alt="" />
        </div>
        <div>
          <div className="my-4 space-y-2">
            <LuPartyPopper className="font-bold text-4xl" />

            <h1 className="text-lg font-bold">Events Party</h1>
            <p>
              Dolor sit amet consectetuer adipiscn elit commodo ligula eget
              dolor. Aenean etsa massa Cum sociis natoque.
            </p>
          </div>
          <div className="space-y-2 mt-4">
            <MdDinnerDining className="font-bold text-4xl" />
            <h1 className="text-lg font-bold">Private Dinning</h1>
            <p>
              Dolor sit amet consectetuer adipiscn elit commodo ligula eget
              dolor. Aenean etsa massa Cum sociis natoque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
