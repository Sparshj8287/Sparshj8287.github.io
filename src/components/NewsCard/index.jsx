"use client";
import React from "react";
import {
  Line,
  NewsCardWrpr,
  NewsDate,
  NewsDescription,
  NewsHeading,
} from "./style";

function NewsCard({ data, index, isvisible, animationdelay }) {
  return (
    <NewsCardWrpr
      isvisible={isvisible}
      animationdelay={animationdelay}
      index={index}
    >
      <NewsHeading>{data.date}</NewsHeading>
      <Line />
      <NewsDescription dangerouslySetInnerHTML={{ __html: data.Description }} />
    </NewsCardWrpr>
  );
}

export default NewsCard;
