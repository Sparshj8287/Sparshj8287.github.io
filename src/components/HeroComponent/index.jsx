"use client";
import React from "react";
import {
  HeroComponentWrpr,
  HeroImageWrpr,
  HeroTextDescription,
  HeroTextHeading,
  HeroTextWrpr,
  MoreButtonsWrpr,
} from "./style";
import {
  Description,
  PrimaryText,
  SecondaryTextArray,
} from "../../data/AboutMe.js";
import ScrambleTextLoop from "../ScrambledText";
import { SecondaryButton } from "../Buttons";
import { useRouter } from "next/navigation";

function HeroComponent({ scrollToSocial }) {
  const router = useRouter();

  return (
    <HeroComponentWrpr>
      <HeroTextWrpr>
        <HeroTextHeading>
          {PrimaryText.split("Sparsh").map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < PrimaryText.split("Sparsh").length - 1 && (
                <span>Sparsh</span>
              )}
            </React.Fragment>
          ))}
        </HeroTextHeading>
        <ScrambleTextLoop texts={SecondaryTextArray} />
        <HeroTextDescription
          dangerouslySetInnerHTML={{ __html: Description }}
        />
        <MoreButtonsWrpr>
          <SecondaryButton text="Get in touch" onClick={scrollToSocial} />
          <SecondaryButton
            text="View my research"
            onClick={() => router.push("/publications")}
          />
        </MoreButtonsWrpr>
      </HeroTextWrpr>
      <HeroImageWrpr>
        <img src="https://i.ibb.co/Y7jG0SYM/Sparsh-Bhaiya.jpg" />
      </HeroImageWrpr>
    </HeroComponentWrpr>
  );
}

export default HeroComponent;
