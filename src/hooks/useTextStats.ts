import { useMemo } from "react";
import { getTextStats } from "../utils/textStats";

interface TextStats {
  words: number;
  charactersWithSpaces: number;
  charactersWithoutSpaces: number;
  readingTime: string;
  speakingTime: string;
}

export function useTextStats(text: string): TextStats {
  return useMemo(() => getTextStats(text), [text]);
}
