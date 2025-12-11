export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}