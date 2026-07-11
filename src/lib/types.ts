export interface Vehicle {
  id: number;
  name: string;
  image: string;
  seats: number;
  transmission: "Automatic" | "Manual";
  doors: number;
  fuel: string;
}

export interface Testimonial {
  id: string;
  name: string;
  subtitle: string;
  quote: string;
  avatar: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface MarqueeImage {
  id: string;
  src: string;
  alt: string;
}
