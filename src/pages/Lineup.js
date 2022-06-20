import Content from "../components/Content";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const urlSlugMatch = require("url-slug-match");

export default function Lineup({ bands }) {
  // const [bands, setBands] = useState([]);
  const { loading, error, data } = useFetch("https://the-javascript-bar-project.herokuapp.com/schedule");

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error </p>;

  let NewMidgard = [];
  let NewVanaheim = [];
  let NewJotunheim = [];

  let DisplayMidgard = [];
  let DisplayVanaheim = [];
  let DisplayJotunheim = [];

  if (data) {
    const dataArray = Object.values(data);
    // console.log(dataArray);

    const stageMidgard = Object.values(dataArray[0]);
    const stageVanaheim = Object.values(dataArray[1]);
    const stageJotunheim = Object.values(dataArray[2]);
    // console.log("this is Midgard", stageMidgard);

    stageMidgard.map((dayMidgard) => {
      dayMidgard = Object.values(dayMidgard);
      // console.log("this is Midgard days", dayMidgard);
      dayMidgard.map((actMidgard) => {
        // console.log(actMidgard.act);
        actMidgard.act !== "break" && (NewMidgard = [...NewMidgard, actMidgard.act]);
        // actMidgard = actMidgard.act;
      });
      // console.log(ActMidgard);
      // return ActMidgard;
    });

    stageVanaheim.map((dayVanaheim) => {
      dayVanaheim = Object.values(dayVanaheim);
      dayVanaheim.map((actVanaheim) => {
        actVanaheim.act !== "break" && (NewVanaheim = [...NewVanaheim, actVanaheim.act]);
      });
    });

    stageJotunheim.map((dayJotunheim) => {
      dayJotunheim = Object.values(dayJotunheim);
      dayJotunheim.map((actJotunheim) => {
        actJotunheim.act !== "break" && (NewJotunheim = [...NewJotunheim, actJotunheim.act]);
      });
    });

    data &&
      NewMidgard.map((bandMidgard) => {
        const thisBand = bands.find((elem) => elem.name === bandMidgard);
        DisplayMidgard = [...DisplayMidgard, thisBand];
      });
    // console.log(DisplayMidgard);

    data &&
      NewVanaheim.map((bandVanaheim) => {
        const thisBandVanaheim = bands.find((elem) => elem.name === bandVanaheim);
        DisplayVanaheim = [...DisplayVanaheim, thisBandVanaheim];
      });
    // console.log(DisplayVanaheim);

    data &&
      NewJotunheim.map((bandJotunheim) => {
        const thisBandJotunheim = bands.find((elem) => elem.name === bandJotunheim);
        DisplayJotunheim = [...DisplayJotunheim, thisBandJotunheim];
      });
    // console.log(DisplayJotunheim);
  }

  // console.log(NewMidgard);

  return (
    <div>
      <div className="py-6 px-6 sm:mx-6 lg:mx-8 ">
        <h1 className="text-7xl sm:text-7xl font-acier bg-concert-yellow flex justify-center py-6 px-6 lg:py-16 xl:text-[114px] xl:py-10 ">Line up</h1>
      </div>
      <Content>
        <section className="m-8 mt-2 xl:m-16">
          <article>
            <p className="text-center text-base font-noraml md:mx-16 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mx-56">
              Since it was launched 3 years ago as a student project of four KEA students - Lucian, Christian, Paul and Drago, the festival has changed drastically and become the <b>largest festival in the world</b>.{" "}
            </p>
            <p className="text-center text-base font-noraml md:mx-16 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mx-56">
              The line up we bring you this year is certainly the biggest gathering of the world's most popular rock stars on one place. In fact, in three places.
            </p>
          </article>
          <p className="flex justify-center text-base font-noraml m-4  md:mx-16 lg:text-xl 2xl:text-4xl 2xl:m-8">~</p>
          <article>
            <p className="text-center text-base font-noraml md:mx-16 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mx-56">
              Three stages, equally big. The band schedule is such that you can choose one stage and explore diverse artists, otherwise you have enough time to simply switch to other stage The passage between the stages is free.
            </p>
            <p className="text-center text-base font-noraml pt-6 md:mx-16 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mx-56">On weekends, there will be one big surprise guest on each stage, who is not listed in this year's line-up. See you!</p>
          </article>
        </section>

        <div className="bg-concert-l-green flex flex-row justify-center sm:justify-start p-4">
          <div className="sm:flex  sm:flex-row">
            <div className=" flex flex-row sm:flex-row sm:p-4 gap">
              <div className={`flex flex-row justify-center items-center m-[0.25rem] text-black font-montserrat px-2 py-1 w-fit font-bold border-[3px] border-black text-sm phone:text-lg bg-concert-yellow mr-2`}>
                ALPHABETICAL <RiArrowDownSLine size={32} />
              </div>

              <div className={`flex flex-row justify-center items-center m-[0.25rem] text-black font-montserrat px-2 py-1 w-fit font-bold border-[3px] border-black text-sm phone:text-lg bg-concert-yellow mr-2`}>
                GENRE <RiArrowDownSLine size={32} />
              </div>
            </div>
            <div className="flex justify-center sm:items-center">
              <div class="form-floating m-[0.25rem] w-[17.8rem] sm:w-auto xl:w-96">
                <input
                  type="text"
                  className="form-control block w-full text-base font-normal font-montserrat bg-concert-yellow bg-clip-padding border border-solid border-black border-[3px]  transition ease-in-out m-0 focus:text-black  placeholder-black  text-font-semibold placeholder-blackfocus:bg-concert-yellow  focus:border-concert-pink focus:outline-none "
                  placeholder="SEARCH BY BAND NAME"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-7xl text-black mb-8 sm:text-7xl  font-acier bg-concert-pink flex justify-center py-4 pb-2 px-6   xl:text-[114px] xl:h-[10rem] mt-[5rem] ">Midgard</h2>

          <ul className="w-full grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
            {data &&
              DisplayMidgard.map((band, index) => (
                <div key={`band#${index}`} className="bg-gray-600 text-white hover:opacity-80">
                  <CheckingBands bgColor="concert-pink" band={band} />
                </div>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="text-7xl text-black mb-8 sm:text-7xl  font-acier bg-concert-b-green flex justify-center py-4 pb-2 px-6   xl:text-[114px] xl:h-[10rem] mt-[5rem] ">Vanaheim</h2>

          <ul className="w-full grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4 ">
            {data &&
              DisplayVanaheim.map((band, index) => (
                <div key={`band#${index}`} className="bg-gray-600 text-white hover:opacity-80">
                  <CheckingBands bgColor="concert-b-green" band={band} />
                </div>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="text-7xl text-black mb-8 sm:text-7xl  font-acier bg-concert-blue flex  justify-center py-4 pb-2 px-6   xl:text-[114px] xl:h-[10rem]  mt-[5rem]">Jotunheim</h2>

          <ul className="w-full grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4 ">
            {data &&
              DisplayJotunheim.map((band, index) => (
                <div key={`band#${index}`} className="bg-gray-600 text-white hover:opacity-80">
                  <CheckingBands bgColor="concert-blue" band={band} />
                </div>
              ))}
          </ul>
        </div>
      </Content>
    </div>
  );
}

export function CheckingBands({ band, bgColor }) {
  if (band) {
    if (band.logo.endsWith(".jpg") || band.logo.endsWith(".JPG") || band.logo.endsWith(".png") || band.logo.endsWith(".svg")) {
      return <ImgJPG band={band} bgColor={bgColor} />;
    }
    return <ImgSVG band={band} bgColor={bgColor} />;
  }
}

export function ImgJPG({ band, bgColor }) {
  return (
    <Link to={`/artist/${urlSlugMatch(band.name.trim())}`} band={band}>
      <div className="grid gap-x-8">
        <div className="h-[11rem] lg:h-[18rem] ">
          <img src={`./images/logos/${band.logo}`} className="object-cover w-full  h-[12rem] lg:h-[18rem]" alt={band.name}></img>
        </div>

        <div className={`bg-${bgColor} font-aciersolid text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl h-[4rem] 2xl:h-[7.4rem] flex justify-center items-center text-black lg:h-[6rem]`}>{band.name}</div>
      </div>
    </Link>
  );
}

export function ImgSVG({ band, bgColor }) {
  return (
    <Link to={`/artist/${urlSlugMatch(band.name.trim())}`} band={band}>
      {" "}
      <div className="grid gap-x-8">
        <div className="h-[11rem] lg:h-[18rem] ">
          <img src={band.logo} className="object-cover w-full  h-[12rem] lg:h-[18rem]" alt={band.name}></img>
        </div>
        <div className={`bg-${bgColor} font-aciersolid  text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl h-[4rem] 2xl:h-[7.4rem] flex justify-center items-center text-black lg:h-[6rem]`}>{band.name}</div>
      </div>
    </Link>
  );
}
