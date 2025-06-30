"use client";
import React from "react";
import {
  PublicationBoxWrpr,
  PublicationContributors,
  PublicationHeading,
  PublicationLogo,
  PublicationsTextWrpr,
  PublicationText,
  TagButtonWrpr,
} from "./style";
import { SpecialButton } from "../Buttons";
import { CustomColors } from "../../data/RecentPublications.js";

function PublicationBox({ data, index, isvisible, animationdelay }) {
  // Helper function to highlight "Sparsh Jain"
  const highlightSparshJain = (text) => {
    if (!text) return null;
    const parts = text.split(/(Sparsh Jain)/g);
    return parts.map((part, idx) =>
      part === "Sparsh Jain" ? (
        <span key={idx} style={{ fontWeight: "bold", color: "#6f42c1" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <PublicationBoxWrpr
      index={index}
      isvisible={isvisible}
      animationdelay={animationdelay}
    >
      {console.log("PublicationBox data:", data?.contributors)}
      <PublicationsTextWrpr>
        <PublicationHeading>
          {highlightSparshJain(data?.heading)}
        </PublicationHeading>
        <PublicationContributors>
          {highlightSparshJain(data?.contributors)}
        </PublicationContributors>
        <PublicationText>{highlightSparshJain(data.extrainfo)}</PublicationText>
        <TagButtonWrpr>
          {Object.entries(data.link).map(
            ([key, value], index) =>
              value && (
                <SpecialButton
                  key={key}
                  text={key.toUpperCase()}
                  color={CustomColors[index % CustomColors.length]}
                  onClick={() => window.open(value, "_blank")}
                />
              )
          )}
        </TagButtonWrpr>
      </PublicationsTextWrpr>
      <PublicationLogo>
        {data.place.split("").map((char, idx) => (
          <span key={idx}>{char}</span>
        ))}
        {data.awards && (
          <div className="award">
            🏆 <span>{data.awards}</span>
          </div>
        )}
      </PublicationLogo>
    </PublicationBoxWrpr>
  );
}

export default PublicationBox;
