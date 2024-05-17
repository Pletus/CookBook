import "../App.css";
import teamImage from '../assets/imgs/team.png';

function AboutUs() {
  return (
    <div>
      <div className="relative mt-4 bg-white rounded overflow-hidden shadow-md">
        <img src={teamImage} alt="About Us" className="w-full" />
        <div className="flex flex-col justify-center items-start absolute top-1/4 left-1/5 transform -translate-y-1/2 mr-40 ml-40">
          <h1 className="text-4xl text-black px-4 py-2 font-serif mt-40">
            ABOUT US
          </h1>
          <p className="text-m text-gray-700 px-4 py-2 font-serif mt-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            perspiciatis aperiam, aliquam quas laboriosam nulla sapiente.
            Assumenda quos quasi voluptate reprehenderit.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md mt-10 hover:bg-green-300">
            Our Story
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
