import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Cards() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // style={{
  //   backgroundImage: 'url(/images/theme.jpg)',
  //    backgroundAttachment: "fixed",
  //  }} 

  return (
    <div className="w-3/4 m-auto h-[700px] " >
      <div className="mt-28"
      >
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white h-[450px] text-black rounded-xl">
              <div className="rounded-t-xl flex justify-center items-center h-40 w-full"
                    style={{
    backgroundImage: 'url(/images/theme.jpg)',
     backgroundAttachment: "fixed",
   }} 
              >
                {/* <img src={d.img} alt="" className=" h-40 w-40 rounded-full bg-indigo-500 mt-4" /> */}
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <h1 className="text-3xl font-semibold ">{d.title}</h1>
                <p className="text-2xl ">{d.content}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl ">Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  )
}

const data = [
  {
    img: `/images/lion.jpg`,
    title: "Close deals interact more be aware of your clients",
    content:
      "Make sure you reach the target audience which you always wanted through your decision making and our support to boost revenue.",
  },
  {
    img: `/images/lion.jpg`,
    title: "Progress your deals to a new level",
    content:
      "Streamline stakeholder management, identifying risks early, and stay proactive with the next best actions to keep momentum strong inside and outside.",
  },
  {
    img: `/images/lion.jpg`,
    title: "Prioritize the best approach to reach your audience.",
    content:
      "We create and execute campaigns that keep you connected with leads, turning strategy into real results.",
  },
  {
    img: `/images/lion.jpg`,
    title: "Data-Driven Marketing: Track, Test and Refine",
    content:
      "Track performance, refine strategies, and build stronger data-driven marketing for impactful results.",
  },
];