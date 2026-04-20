import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Course {
  title: string;
  level: string;
  price: string;
  duration: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface GalleryImage {
  src: string;
  title: string;
}
