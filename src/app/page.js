"use client";
import { useRef } from "react";
import { PageWrpr } from "./style";
import HeroComponent from "../components/HeroComponent/index.jsx";
import LatestNewsComponent from "../components/LatestNewsComponent/index.jsx";
import RecentPublicationsComponent from "../components/RecentPublicationsComponent/index.jsx";
import SocialConnectionComponent from "../components/SocialConnectionComponent/index.jsx";

export default function Home() {
  const socialRef = useRef(null);

  const scrollToSocial = () => {
    socialRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PageWrpr>
        <HeroComponent scrollToSocial={scrollToSocial} />
        <LatestNewsComponent />
        <RecentPublicationsComponent />
      </PageWrpr>
      <div ref={socialRef}>
        <SocialConnectionComponent />
      </div>
      {/* Example button to trigger scroll */}
      {/* <button onClick={scrollToSocial}>Go to Social Connection</button> */}
    </>
  );
}
