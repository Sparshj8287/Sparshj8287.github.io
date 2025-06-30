"use client";
import React, { useState, useEffect } from "react";
import {
  PublicationHeading,
  RecentPublicationsWrpr,
  SeeMoreButtonWrpr,
} from "./style";
import { RecentPublicationsArray } from "../../data/RecentPublications.js";
import PublicationBox from "../PublicationBox";
import { PrimaryButton } from "../Buttons";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver.js";
import { useRouter } from "next/navigation";

function RecentPublicationsComponent() {
  const [containerRef, isContainerIntersecting, hasContainerIntersected] =
    useIntersectionObserver();
  const [visiblePublications, setVisiblePublications] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (hasContainerIntersected) {
      // Stagger the animation of each publication box
      RecentPublicationsArray.slice(0, 3).forEach((_, index) => {
        setTimeout(() => {
          setVisiblePublications((prev) => [...prev, index]);
        }, index * 200); // 200ms delay between each box
      });
    }
  }, [hasContainerIntersected]);

  // Reset animations when container leaves viewport (optional)
  useEffect(() => {
    if (!isContainerIntersecting && hasContainerIntersected) {
      // Optional: Reset animations when scrolling away
      // setVisiblePublications([]);
    }
  }, [isContainerIntersecting, hasContainerIntersected]);

  return (
    <RecentPublicationsWrpr ref={containerRef}>
      <PublicationHeading>Recent Publications</PublicationHeading>
      {RecentPublicationsArray.map((items, key) => {
        if (key < 3) {
          return (
            <PublicationBox
              data={items}
              key={key}
              index={key}
              isvisible={visiblePublications.includes(key)}
              animationdelay={key * 0.2}
            />
          );
        }
      })}
      <SeeMoreButtonWrpr>
        <PrimaryButton
          text="See More"
          onClick={() => router.push("/publications")}
        />
      </SeeMoreButtonWrpr>
    </RecentPublicationsWrpr>
  );
}

export default RecentPublicationsComponent;
