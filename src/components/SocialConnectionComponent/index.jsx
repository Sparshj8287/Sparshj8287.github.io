"use client";
import React from "react";
import {
  CopyRightAndRightsText,
  SocialConnectionIconWrpr,
  SocialConnectionWrpr,
  SocialIconWrpr,
} from "./style";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";

import {
  SocialConnectionLinks,
  SocialConnectionIconColors,
} from "../../data/SocialConnections.js";

const socialIcons = [
  { icon: <FaXTwitter size={32} aria-label="X" />, key: "twitter" },
  { icon: <FaLinkedin size={32} aria-label="LinkedIn" />, key: "linkedin" },
  { icon: <FaGithub size={32} aria-label="GitHub" />, key: "github" },
  {
    icon: <SiGooglescholar size={32} aria-label="Google Scholar" />,
    key: "scholar",
  },
  {
    icon: <MdEmail size={32} aria-label="Email" />,
    key: "email",
  },
].map((item, idx) => ({
  ...item,
  link: SocialConnectionLinks[item.key],
  color: SocialConnectionIconColors[idx % SocialConnectionIconColors.length],
}));

function SocialConnectionComponent() {
  return (
    <SocialConnectionWrpr>
      <SocialConnectionIconWrpr>
        {socialIcons.map(({ icon, key, link, color }) => (
          <SocialIconWrpr key={key} currentcolor={color}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </SocialIconWrpr>
        ))}
      </SocialConnectionIconWrpr>
      <CopyRightAndRightsText>
        © {new Date().getFullYear()} Sparsh Jain. All rights reserved.
      </CopyRightAndRightsText>
    </SocialConnectionWrpr>
  );
}

export default SocialConnectionComponent;
