"use client";
import { Banner, CreatorCard, NftCard } from "./componets";
import { useState, useEffect, useRef } from "react";
import images from "./assets";
import { makeId } from "../utils/makeId";
import Image from "next/image";
import { useTheme } from "next-themes";

const Home = () => {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const [hideButtons, setHideButtons] = useState(false);
  const { theme } = useTheme();
  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };
  const isScrolable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;
    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };

  useEffect(() => {
    isScrolable();
    window.addEventListener("resize", isScrolable);

    return () => {
      window.removeEventListener("resize", isScrolable);
    };
  });

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          bannerText="Discover , collect , and sell extraordinary NFTs!!"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left "
          parentStyles="justify-start mb-7 h-72 sm:h-60 p-12 xs:p-4 xsh-44 rounded-3xl"
        />
        <div>
          <h1 className=" font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl text-semibold ml-4 xs:ml-0 ">
            Top Sellers
          </h1>
          <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
            <div
              className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none  "
              ref={scrollRef}
            >
              {[6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
                <CreatorCard
                  key={`creator-${i}`}
                  rank={i}
                  creatorImage={images[`creator${i}`]}
                  creatorName={`0x${makeId(3)}...${makeId(4)}`}
                  creatorEths={10 - i * 0.5 + i - 2.232}
                />
              ))}
              {!hideButtons && (
                <>
                  <div
                    onClick={() => handleScroll("left")}
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
                  >
                    <Image
                      src={images.left}
                      layout="fill"
                      objectFit="contain"
                      alt="leftArrow"
                      className={theme === "light" && "filter invert"}
                    />
                  </div>
                  <div
                    onClick={() => handleScroll("right")}
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
                  >
                    <Image
                      src={images.right}
                      layout="fill"
                      objectFit="contain"
                      alt="leftArrow"
                      className={theme === "light" && "filter invert"}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start ">
            <h1 className=" flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl text-semibold  sm:mb-4  ">
              Hot Bids
            </h1>
            <div> Search Bars</div>
          </div>
          <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <NftCard
                key={`nft-${i}`}
                nft={{
                  i,
                  name: `Nifty Nft ${i}`,
                  seller: `0x${makeId(3)}...${makeId(4)}`,
                  owner: `0x${makeId(3)}...${makeId(4)}`,
                  desc: "Cool Nft On Sale",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
