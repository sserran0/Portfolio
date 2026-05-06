import type { Project } from "./types";

export const projects: Project[] = [
  {
    
    title: "Real Madrid LaLiga EASports Placement Predictor",
    blurb: "A command-line tool that predicts Real Madrid's final La Liga standings using Monte Carlo simulation. Built with Python, it pulls live match data from the football-data.org API, analyzes completed results, and simulates the remainder of the season thousands of times to produce probabilistic predictions.",
    href: "https://github.com/sserran0/Real-Madrid-LA-LIGA-Placement-Predictor",
    tags: ["Python"],

  },
  {
    title: "InterSplit",
    blurb: "A full-stack expense splitting web-application with embedded real-time currency conversion. Designed for international friend groups + study abroad students.",
    href: "https://github.com/sserran0/InterSplit",
    tags: ["Go", "SQL", "TS"],

  },
  {
    title: "Coming Soon...",
    blurb: "",
    href: "",
    tags: [""]

  },
] satisfies Project[];
