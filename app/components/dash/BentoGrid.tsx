"use client";
import SongCard from "./spotify-player";
import TimerInfo from "./timer";
import ButtonBox from "./ButtonBox";
import ImageBox from "./ImageBox";

export default function BentoGrid() {
  return (
    <>
      {/* Mobile grid - visible only on screens smaller than md */}

      {/* <div className="grid grid-cols-10 grid-rows-28 h-[calc(100vh-12rem)] gap-2 min-h-[600px] md:hidden"> */}
              

      <div className="flex justify-center h-[calc(100vh)] overflow-y-auto px-2 md:hidden">
        <div className="grid grid-cols-14 grid-rows-24 gap-5 w-full mx-auto max-w-[90%] min-h-[150vh] py-2">
          {/* your grid items */}
          <div className="bg-red-500 w-full h-full col-span-14 row-span-6">
            <TimerInfo
              timer="12 : 21 : 12"
              heading="Review 0"
              info="lorem something something info here"
            />
          </div>
          <div className="bg-purple-500 w-full h-full col-span-8 row-span-10 mb-8">jj</div>
          <div className="bg-blue-500 w-full h-full col-span-6 row-span-11">
            <ImageBox image="/Group 1000007425.png" title="cool looking dude" />
          </div>
          <div className="col-span-8 row-span-1"></div>
          <div className="bg-orange-500 w-full h-full col-span-6 row-span-11">
          </div>
          <div className="border-emerald-500 mb-2 bg-[#060f0b] rounded-md border-2 h-full col-span-8 row-span-5 w-full p-4 flex flex-col items-center">
              <ButtonBox text="Check out your team" btnText="Profile" />
          </div>
          <div className="bg-green-500 w-full h-full col-span-8 row-span-8">jj</div>
          <div className="bg-yellow-500 w-full h-full col-span-6 row-span-7">
            <SongCard title="My song" artist="My name" image="/landing/C2C Logo.svg" />
          </div>
          <div className="border-emerald-500 mb-2 bg-[#060f0b] rounded-md border-2 h-full col-span-8 row-span-5 w-full p-4 flex flex-col items-center">
              <ButtonBox text="Submit your idea" btnText="Form" />
          </div>
      </div>
    </div>

      {/* Desktop grid - hidden on small screens, visible on md+ */}
      <div className="hidden md:flex md:justify-center md:h-[calc(100vh)] md:overflow-y-auto md:px-4">
        <div className="grid grid-cols-14 grid-rows-24 gap-5 w-full mx-auto max-w-[80%] min-h-[150vh] py-8">
          {/* your grid items */}

          <div className="bg-red-500 w-full h-full col-span-11 row-span-5">
            <TimerInfo timer="12 : 21 : 12" heading="Review 0" info="lorem iajnfewjnfljenflqwn" />
          </div>
          <div className="relative w-full h-full overflow-hidden flex items-center justify-center col-span-3 row-span-7">
            <ImageBox image="/Group 1000007425.png" title="cool looking dude" />
          </div>
          <div className="bg-orange-500 w-full h-full col-span-5 row-span-9">
            <SongCard title="My song" artist="My name" image="/landing/C2C Logo.svg" />
          </div>
          <div className="relative w-full h-full overflow-hidden flex items-center justify-center col-span-4 row-span-9">
            <ImageBox image="/image 42.png" title="c" />
          </div>
          <div className="border-emerald-500 rounded-md bg-[#060f0b] border-2 col-span-5 row-span-4 w-full p-8 flex flex-col items-center gap-4">
            <ButtonBox text="Check out your team" btnText="Profile" />
          </div>
          <div className="bg-yellow-500 w-full h-full col-span-5 row-span-8">jj</div>
          <div className="bg-indigo-500 w-full h-full col-span-3 row-span-9">jj</div>
          <div className="bg-purple-500 w-full h-full col-span-6 row-span-9">jj</div>
          <div className="border-emerald-500 bg-[#060f0b] rounded-md border-2 h-full col-span-5 row-span-4 w-full p-8 flex flex-col items-center gap-4">
            <ButtonBox text="Submit your ideas" btnText="Form" />
          </div>
        </div>
      </div>
    </>
  );
}
