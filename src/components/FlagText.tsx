import React from "react";

/**
 * Windows has no country-flag emoji font, so browsers there fall back to the
 * bare two-letter code (the calendar's 🇸🇩 shows up as "SD"). Swapping the
 * regional indicator pairs for Twemoji images keeps flags visible everywhere.
 */
const FLAG_PATTERN = /[\u{1F1E6}-\u{1F1FF}]{2}/gu;
const TWEMOJI_SVG_BASE =
  "https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg";

const toCodePoints = (flag: string) =>
  Array.from(flag)
    .map((character) => character.codePointAt(0)?.toString(16) ?? "")
    .join("-");

interface FlagTextProps {
  text: string;
}

const FlagText: React.FC<FlagTextProps> = ({ text }) => {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(FLAG_PATTERN)) {
    const flag = match[0];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }

    nodes.push(
      <img
        key={`${index}-${flag}`}
        className="emoji-flag"
        src={`${TWEMOJI_SVG_BASE}/${toCodePoints(flag)}.svg`}
        alt={flag}
        loading="lazy"
      />
    );

    lastIndex = index + flag.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
};

export default FlagText;
