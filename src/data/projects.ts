import type { Project } from "../types/project";
import Manage from "../assets/images/manage-desktop.jpg";
import Loopstudios from "../assets/images/loopstudios-desktop.jpg";
import Shortly from "../assets/images/shortly-desktop.jpg";
import Insure from "../assets/images/insure-desktop.jpg";
import Blogr from "../assets/images/blogr-desktop.jpg";

export const projects: Project[] = [
  {
    title: "Manage Landing",
    image: Manage,
    route: "/manage",
    category: "Management",
  },
  {
    title: "Loopstudios Landing",
    image: Loopstudios,
    route: "/loopstudios",
    category: "Hardware",
  },
  {
    title: "Shortly Landing",
    image: Shortly,
    route: "/shortly",
    category: "Software",
  },
  {
    title: "Insure Landing",
    image: Insure,
    route: "/insure",
    category: "Insurance",
  },
  {
    title: "Blogr Landing",
    image: Blogr,
    route: "/blogr",
    category: "Software",
  },
];
