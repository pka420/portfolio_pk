import { targetElements, defaultProps } from "../data/scrollRevealConfig";
import ScrollReveal from "scrollreveal";
export default function initScrollReveal() {
  if (!targetElements.length) return;

  ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
  });
}

