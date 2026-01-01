import prettyMs from "pretty-ms";

export interface TextStats {
  words: number;
  charactersWithSpaces: number;
  charactersWithoutSpaces: number;
  readingTime: string;
  speakingTime: string;
}

export function getTextStats(text: string): TextStats {
  const words = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  const readMs = (words / 200) * 60 * 1000;
  const speakMs = (words / 150) * 60 * 1000;

  const formatTime = (ms: number, label: string) => {
    if (ms < 60_000) {
      return `<1 min ${label}`;
    }

    const compact = prettyMs(ms, { unitCount: 1 });
    const match = compact.match(/^(\d+(?:\.\d+)?)([a-z]+)$/i);
    if (!match) {
      return `~${compact} ${label}`;
    }

    const [, value, unit] = match;
    const unitMap: Record<string, string> = {
      ms: "ms",
      s: "sec",
      m: "min",
      h: "hr",
      d: "day",
    };

    return `~${value} ${unitMap[unit] ?? unit} ${label}`;
  };

  return {
    words,
    charactersWithSpaces: text.length,
    charactersWithoutSpaces: text.replace(/\s/g, "").length,
    readingTime: formatTime(readMs, "read"),
    speakingTime: formatTime(speakMs, "speak"),
  };
}
