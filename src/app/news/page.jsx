"use client";
import {
  LatestNewsWrpr,
  NewsCardsWrpr,
  NewsHeading,
} from "../../components/LatestNewsComponent/style.js";
import NewsCard from "../../components/NewsCard/index.jsx";
import { NewsArray } from "../../data/LatestNews.js";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver.js";
import React, { useState, useEffect } from "react";
import { PageWrpr } from "../style";

function NewsPage() {
  const [containerRef, isContainerIntersecting, hasContainerIntersected] =
    useIntersectionObserver();
  const [visibleNewsCards, setVisibleNewsCards] = useState([]);

  useEffect(() => {
    if (hasContainerIntersected) {
      // Stagger the animation of ALL news cards
      NewsArray.forEach((_, index) => {
        setTimeout(() => {
          setVisibleNewsCards((prev) => [...prev, index]);
        }, index * 150); // 150ms delay between each card
      });
    }
  }, [hasContainerIntersected]);

  return (
    <PageWrpr>
      <LatestNewsWrpr ref={containerRef}>
        <NewsHeading>All News</NewsHeading>
        <NewsCardsWrpr>
          {NewsArray.map((item, key) => (
            <NewsCard
              data={item}
              key={key}
              index={key}
              isvisible={visibleNewsCards.includes(key)}
              animationdelay={key * 0.15}
            />
          ))}
        </NewsCardsWrpr>
      </LatestNewsWrpr>
    </PageWrpr>
  );
}

export default NewsPage;
